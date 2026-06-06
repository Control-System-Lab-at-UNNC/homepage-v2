// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

// Set before markuxt's nuxt.config is evaluated
process.env.MARKUXT_ROOT_DIR = process.env.MARKUXT_ROOT_DIR || 'src/'

export default defineNuxtConfig({
  extends: ['@hnrobert/markuxt'],

  // i18n — site-specific locales and translations
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'zh-CN', name: '简体中文', file: 'zh-CN.json' }
    ],
    langDir: '../src/i18n',
  },

  // Site-specific head (favicon)
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
      ]
    }
  },

  // Content directory — content lives directly in src/ (not src/content/)
  content: {
    sources: {
      content: {
        driver: 'fs',
        base: resolve(process.cwd(), 'src')
      }
    }
  },

  // Runtime app config (markuxt theme options)
  appConfig: {
    markuxt: {
      logo: {
        src: '/images/uon-logo.png',
      },
      navigation: [
        { to: '/', labelKey: 'nav.home' },
        { to: '/members', labelKey: 'nav.members' },
        { to: '/publications', labelKey: 'nav.publications' },
        { to: '/projects', labelKey: 'nav.projects' },
        { to: '/positions', labelKey: 'nav.positions' },
        { to: '/news', labelKey: 'nav.news' },
      ],
      contact: {
        email: 'salman.ijaz@nottingham.edu.cn',
        externalUrl: 'https://www.nottingham.edu.cn',
        externalLabelKey: 'footer.universityLink',
      },
      carousel: {
        fallbackImage: '/images/default.jpg',
        images: [
          {
            src: '/images/default.jpg',
            alt: 'Characteristic image',
            caption: 'Control Systems Lab at UNNC'
          },
          {
            src: '/images/team.jpg',
            alt: 'Team photo',
            caption: 'Meet us!'
          },
        ],
      },
    },
  },
})
