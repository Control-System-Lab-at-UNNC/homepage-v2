// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@hnrobert/markuxt'],

  // i18n — site-specific locales and translations
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'zh-CN', name: '简体中文', file: 'zh-CN.json' }
    ],
    langDir: '../src/content/i18n',
  },

  // Site-specific head (favicon)
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/_content/assets/favicon.png' },
      ]
    }
  },
})
