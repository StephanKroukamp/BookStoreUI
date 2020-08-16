import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    reducer: state => ({ persistent: state.persistent })
  }).plugin(store)
}
