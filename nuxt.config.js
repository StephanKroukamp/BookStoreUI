import colors from 'vuetify/lib/util/colors'

export default {
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
  loading: {
    color: '#1976D2',
    height: '5px',
    duration: 500,
    continuous: true
  },
  loadingIndicator: {
    name: 'rectangle-bounce',
    color: '#1976D2',
    background: 'white'
  },
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
  plugins: [
    { src: '~/plugins/vuex-persist.js', ssr: false },
    '~/plugins/i18n.js'
  ],
  router: {
    middleware: 'i18n'
  },
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
    }
  },
  axios: {},
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: colors.blue.darken2
        },
        dark: {
          primary: colors.blue.darken2
        }
      }
    },
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
