<template>
  <img :src="refinedSrc" :alt="alt" :width="width" :height="height" />
</template>

<script setup lang="ts">
import { inject, computed, type Ref } from 'vue'

const props = defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  width: { type: [String, Number], default: undefined },
  height: { type: [String, Number], default: undefined }
})

// Injected by the page component via provide('contentId', ...)
const contentId = inject<Ref<string>>('contentId', { value: '' } as Ref<string>)

const config = useRuntimeConfig()

const refinedSrc = computed(() => {
  // Resolve relative paths using the content file's _id
  const resolved = resolveContentImage(props.src, contentId.value)
  if (!resolved) return ''
  const basePath = config.app.baseURL || ''
  if (!basePath || basePath === '/') return resolved
  return basePath.replace(/\/$/, '') + resolved
})
</script>
