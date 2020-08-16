export default {
  mode: 'spa',
  target: 'server',
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa'
  ],
  router: {
    middleware: 'i18n'
  },
  plugins: [
    { src: '~/plugins/vuex-persist.js', ssr: false },
    '~/plugins/i18n.js'
  ],
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/signin',
            method: 'post',
            propertyName: 'token'
          },
          user: {
            url: 'auth/user',
            method: 'get',
            propertyName: 'user'
          },
          logout: false
        },
        tokenType: 'bearer',
        tokenRequired: true,
        globalToken: true,
        autoFetchUser: true
      }
    },
    redirect: {
      login: '/auth/signin',
      logout: '/auth/signin',
      callback: false,
      home: '/'
    },
    plugins: ['~/plugins/auth-i18n-redirect.js']
  },
  axios: {},
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    defaultAssets:
    {
      font: {
        family: 'Inconsolata'
      },
      icons: 'fa'
    }
  },
  build: {
  }
}
