export default ({
  namespaced: true,
  state: {
    stage: 'main', // main, name, quiz, last
    name: '',
    component: 'MainPage', // MainPage, QuizPage, LastPage
    page: 1,
    total: 15,
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
    stage: state => state.stage,
    name: state => state.name,
    component: state => state.component,
    page: state => state.page,
    total: state => state.total,
    roles: state => state.roles,
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
    setStage(state, value) {
      state.stage = value;
    },
    setName(state, value) {
      state.name = value;
    },
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
      state.roles[value]++;
    }
  },
  actions: {
    //
  }
})