export const state = () => ({
  useDarkTheme: false
})

export const mutations = {
  toggleUseDarkTheme (state) {
    if (state.useDarkTheme) {
      state.useDarkTheme = false
    } else {
      state.useDarkTheme = true
    }
  }
}

export const getters = {
  getUseDarkTheme: (state) => {
    return state.useDarkTheme
  }
}
