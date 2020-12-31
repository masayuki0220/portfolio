import * as fontawesome from './build/fontawesome'
require('dotenv').config()

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  ssr: true,
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "辻将幸(Masayuki Tsuji)'s Portfolio",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'CTO、Webエンジニアとして活動している辻将幸(Masayuki Tsuji)のポートフォリオサイト。「アイラッド」の屋号を掲げフリーランス（個人事業主）として事業のサポートをエンジニアリングでサポートしています。',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/variables.scss', '@/assets/scss/global.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
    ['@nuxtjs/fontawesome', { component: 'v-icon' }],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://portfolio.irad.site',
    exclude: ['/contact'],
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
  },

  fontawesome: {
    icons: {
      solid: fontawesome.solid,
      regular: fontawesome.regular,
      brands: fontawesome.brands,
    },
  },

  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:400,700'],
    },
  },
}
