export default ({ app }) => {
  app.$auth.onRedirect((to, from) => {
    return '/' + app.i18n.locale + to
  })
}
