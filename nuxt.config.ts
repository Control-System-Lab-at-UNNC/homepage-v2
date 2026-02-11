// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Source directory
  srcDir: 'src/',

  // Nuxt Content module
  modules: ['@nuxt/content'],

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
  css: ['~/assets/css/main.css'],

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
