import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,

  head: {
    titleTemplate: '%s - Aaron',
    title: 'System Integration',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: [],

  plugins: [
    '~/plugins/html5qrcode.client.js'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  axios: {
    baseURL: 'http://localhost:3000', 
    credentials: true
  },

  auth: {
    //options
    redirect: {
      login: '/auth/signin',
      logout: '/auth/signin',
      callback: '/auth/callback',
      home: '/'
    },
    autoFetchUser: false,
    strategies: {
      google: {
        clientId: '56538036089-h4r1dp4k4iamu2u3dsaoqacptdd92bvv.apps.googleusercontent.com',
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://accounts.google.com/o/oauth2/auth',  
          userInfo: 'https://www.googleapis.com/oauth2/v3/userinfo'   
        },
        token: {
          property: "access_token",
          type: "Bearer",
          maxAge: 1800,
        },
        responseType: "token id_token",
        scope: ["openid","profile","email"],
        redirectUri: process.env.REDIRECT_URI, 
        codeChallengeMethod: '', 
      }
    }
  },



  vuetify: {
    customVariables: ['~/assets/variables.scss'],
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
