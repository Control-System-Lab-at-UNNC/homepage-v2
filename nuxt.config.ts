// https://nuxt.com/docs/api/configuration/nuxt-config
import { readdirSync, writeFileSync, mkdirSync, existsSync, copyFileSync, rmSync } from 'fs'
import { join, parse, extname, relative } from 'path'

/**
 * Sync non-document files (images, videos, etc.) from content/ to public/_content/.
 * This lets authors place assets next to their markdown files in content/ while
 * still serving them as static files at build time (Nuxt Content v2 ignores
 * binary files in content/).
 *
 * Source:  src/content/members/staff/salman-ijaz.webp
 * Target:  src/public/_content/members/staff/salman-ijaz.webp
 * URL:     /_content/members/staff/salman-ijaz.webp
 */
function syncContentAssets(contentDir: string, publicDir: string) {
  const docExtensions = new Set(['.md', '.mdx', '.yml', '.yaml', '.json', '.csv'])
  const targetDir = join(publicDir, '_content')

  // Clean previous output so stale files don't linger
  if (existsSync(targetDir)) {
    rmSync(targetDir, { recursive: true, force: true })
  }

  let copiedCount = 0

  function walk(dir: string) {
    if (!existsSync(dir)) return
    const entries = readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(fullPath)
      } else if (entry.isFile()) {
        const ext = extname(entry.name).toLowerCase()
        if (!docExtensions.has(ext)) {
          const rel = relative(contentDir, fullPath)
          const destPath = join(targetDir, rel)
          const destDir = parse(destPath).dir
          if (!existsSync(destDir)) {
            mkdirSync(destDir, { recursive: true })
          }
          copyFileSync(fullPath, destPath)
          copiedCount++
        }
      }
    }
  }

  walk(contentDir)
  console.log(`[Content Assets] Synced ${copiedCount} asset(s) from content/ → public/_content/`)
}

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Source directory
  srcDir: 'src/',

  // Nuxt Content module
  modules: ['@nuxt/content'],

  // Build-time hooks
  hooks: {
    'build:before': () => {
      // Sync content assets (images/videos next to markdown) to public/_content/
      syncContentAssets(
        join(process.cwd(), 'src/content'),
        join(process.cwd(), 'src/public')
      )

      // Auto-detect carousel images at build time
      // public folder is inside src/ directory
      const carouselDir = join(process.cwd(), 'src/public/images/carousel')
      const manifestPath = join(process.cwd(), 'src/assets/carousel-manifest.json')

      const images: Array<{ src: string; alt: string; caption: string }> = []

      if (existsSync(carouselDir)) {
        const files = readdirSync(carouselDir)
        const imageExtensions = ['.webp', '.jpg', '.jpeg', '.png', '.gif', '.svg']

        files.forEach(file => {
          const ext = parse(file).ext.toLowerCase()
          if (imageExtensions.includes(ext)) {
            const nameWithoutExt = parse(file).name
            // Convert filename to readable caption (e.g., "lab-1" -> "Lab 1")
            const caption = nameWithoutExt
              .replace(/[-_]/g, ' ')
              .replace(/\b\w/g, c => c.toUpperCase())

            images.push({
              src: `/images/carousel/${file}`,
              alt: caption,
              caption: caption
            })
          }
        })
      }

      // Ensure assets directory exists
      const assetsDir = join(process.cwd(), 'src/assets')
      if (!existsSync(assetsDir)) {
        mkdirSync(assetsDir, { recursive: true })
      }

      // Write manifest
      writeFileSync(manifestPath, JSON.stringify(images, null, 2))
      console.log(`[Carousel] Found ${images.length} images in carousel directory`)
    }
  },

  // App configuration
  app: {
    head: {
      title: 'Control System Lab - University of Nottingham Ningbo China',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Control System Lab at UNNC - Research in control systems, robotics, and aerospace engineering.' },
        { name: 'keywords', content: 'Control System, Robotics, UNNC, University of Nottingham Ningbo China, Aerospace, Drone, UAV' },
        { property: 'og:title', content: 'Control System Lab - UNNC' },
        { property: 'og:description', content: 'Research in control systems, robotics, and aerospace engineering.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Fraunces:ital,opsz,wght@0,9..144,100;0,9..144,200;0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,100;1,9..144,200;1,9..144,300;1,9..144,400;1,9..144,500;1,9..144,600;1,9..144,700;1,9..144,800;1,9..144,900&display=swap' }
      ],
      script: []
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    baseURL: process.env.NUXT_PUBLIC_BASE_URL || '/'
  },

  // CSS
  css: ['~/assets/css/main.css', 'katex/dist/katex.min.css'],

  // Content module configuration
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dusk: 'github-dark'
      }
    },
    navigation: {
      fields: ['icon', 'title', 'description']
    },
    // Markdown processing: LaTeX math via remark-math + rehype-katex.
    // remark-math turns $...$ / $$...$$ into math nodes, rehype-katex
    // renders them to static KaTeX HTML at build time (works with SSG).
    markdown: {
      // Map the raw <video> tag to a prose component that prefixes the app
      // baseURL onto root-absolute src/poster paths (like MDC's ProseImg does
      // for <img>). Without this, /images/... videos 404 on sub-path deploys
      // such as GitHub Pages (/homepage-v2/). Merges with the default tag map.
      tags: {
        img: 'ProseImg',
        video: 'ProseVideo'
      },
      remarkPlugins: {
        'remark-math': {}
      },
      rehypePlugins: {
        'rehype-katex': {
          // Emit MathML alongside HTML for accessibility; don't throw on
          // minor LaTeX issues so a single bad expression can't break a page.
          output: 'htmlAndMathml',
          strict: false
        }
      }
    }
  },

  // Nitro configuration for GitHub Pages
  // Default to root deployment. Set NUXT_PUBLIC_BASE_URL env var to override.
  // Examples:
  // - Root deployment (organization pages): NUXT_PUBLIC_BASE_URL=/
  // - Project deployment: NUXT_PUBLIC_BASE_URL=/homepage-v2/
  nitro: {
    baseURL: process.env.NUXT_PUBLIC_BASE_URL || '/'
  },

  // TypeScript
  // typeCheck disabled — vite-plugin-checker has a known bug with pnpm's strict
  // symlink layout (ENOTEMPTY / ENOENT when copying TS lib files).  IDE + CI
  // already cover type-checking; this was only running a redundant checker
  // inside the dev server.
  typescript: {
    strict: true,
    typeCheck: false
  },

  // Vite
  vite: {
    optimizeDeps: {
      include: ['@nuxt/content']
    }
  }
})
