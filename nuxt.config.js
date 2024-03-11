const PrismicConfig = require('./prismic.config');

export default {
  assetsSubDirectory: '/static',
  assetsPublicPath: '/',

  loading: {
    height: '4px'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'UnRestricted Team',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/styles/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/prismic',
  ],

  prismic: {
    endpoint: PrismicConfig.apiEndpoint,
    apiOptions: {
      access_token: PrismicConfig.token,
    },
    preview: '/preview'
  },

  target: 'static',

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
