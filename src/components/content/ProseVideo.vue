<template>
  <video
    :src="refinedSrc"
    :controls="controls"
    :autoplay="autoplay"
    :loop="loop"
    :muted="muted"
    :poster="refinedPoster"
    :width="width"
    :height="height"
  >
    <slot />
  </video>
</template>

<script setup lang="ts">
const props = defineProps({
  src: { type: String, default: '' },
  poster: { type: String, default: undefined },
  controls: { type: [Boolean, String], default: true },
  autoplay: { type: [Boolean, String], default: false },
  loop: { type: [Boolean, String], default: false },
  muted: { type: [Boolean, String], default: false },
  width: { type: [String, Number], default: undefined },
  height: { type: [String, Number], default: undefined }
})

// Mirror MDC's ProseImg: prefix root-absolute paths with the app baseURL so
// assets resolve correctly under a sub-path deploy (e.g. /homepage-v2/).
// Raw <video> isn't a prose component by default, so without this its src
// would resolve against the domain root and 404 on GitHub Pages.
// (Plain string join — avoids a direct `ufo` import, which doesn't resolve
// cleanly from src/ under pnpm's strict layout.)
function withAppBase(src?: string): string | undefined {
  if (!src || !src.startsWith('/') || src.startsWith('//')) return src
  let base = useRuntimeConfig().app.baseURL || '/'
  if (!base.startsWith('/')) base = '/' + base
  if (!base.endsWith('/')) base = base + '/'
  if (base === '/' || src.startsWith(base)) return src
  return base.replace(/\/$/, '') + src
}

const refinedSrc = computed(() => withAppBase(props.src))
const refinedPoster = computed(() => withAppBase(props.poster))
</script>
