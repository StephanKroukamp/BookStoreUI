import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    reducer: state => ({ navigation: state.navigation })
  }).plugin(store)
}
