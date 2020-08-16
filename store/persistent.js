export const state = () => ({
  useDarkTheme: false,
  locales: ['en', 'af'],
  locale: 'en'
})

export const mutations = {
  toggleUseDarkTheme (state) {
    if (state.useDarkTheme) {
      state.useDarkTheme = false
    } else {
      state.useDarkTheme = true
    }
  },
  switchLocales (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

export const getters = {
  getUseDarkTheme: (state) => {
    return state.useDarkTheme
  },
  getLocales: (state) => {
    return state.locales
  }
}
