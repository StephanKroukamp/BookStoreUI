export default function ({ isHMR, app, store, route, params, error, redirect }) {
  const defaultLocale = app.i18n.fallbackLocale

  if (isHMR) {
    return
  }

  const locale = route.query.lang || defaultLocale

  if (!store.state.persistent.locales.includes(locale)) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }

  store.commit('persistent/switchLocales', locale)

  app.i18n.locale = store.state.persistent.locale
}
