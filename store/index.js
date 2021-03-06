export const state = () => ({
  icons: {
    signIn: 'fa-sign-in-alt',
    signUp: 'fa-user-plus',
    signOut: 'fa-sign-out-alt',
    theme: 'fa-adjust',
    language: 'fa-language',
    search: 'fa-search'
  }
})

export const getters = {
  getIcons: (state) => {
    return state.icons
  }
}
