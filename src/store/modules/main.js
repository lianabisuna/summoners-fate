export default ({
  namespaced: true,
  state: {
    component: 'MainPage' // Main, Quiz, Last
  },
  getters: {
    component: state => state.component
  },
  mutations: {
    setComponent(state, value) {
      state.component = value;
    }
  },
  actions: {
    //
  }
})