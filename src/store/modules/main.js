export default ({
  namespaced: true,
  state: {
    // MainPage, QuizPage, LastPage
    component: 'MainPage',
    page: 1,
    total: 3,
    // roles
    roles: {
      controller: 0,
      fighter: 0,
      mage: 0,
      marksman: 0,
      slayer: 0,
      tank: 0,
      hybrid: 0
    }
  },
  getters: {
    component: state => state.component,
    page: state => state.page,
    total: state => state.total,
    role: state => {
      var roles = state.roles;

      let values = Object.values(roles);
      let max = Math.max(...values);

      return Object.keys(roles).find(key => roles[key] === max);
    },
    // roles
    controller: state => state.roles.controller,
    fighter: state => state.roles.fighter,
    mage: state => state.roles.mage,
    marksman: state => state.roles.marksman,
    slayer: state => state.roles.slayer,
    tank: state => state.roles.tank,
    hybrid: state => state.roles.hybrid
  },
  mutations: {
    setComponent(state, value) {
      state.component = value;
    },
    setTotal(state, value) {
      state.total = value;
    },
    setPage(state, value) {
      state.page = value;
    },
    increaseRole(state, value) {
      state[value]++;
    }
  },
  actions: {
    //
  }
})