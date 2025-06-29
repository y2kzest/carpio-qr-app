import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,

  head: {
    titleTemplate: '%s - bsit3a-systeminteg',
    title: 'bsit3a-systeminteg',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: [
    'vuetify/dist/vuetify.min.css'
  ],

  plugins: ['~/plugins/firebase.js'],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  vuetify: {
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {}
}
