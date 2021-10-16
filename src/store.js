export default {
  state: {
    employees: [],
  },
  mutations: {
    init(state, data) {
      state.employees = data;
      window.localStorage.setItem("employees", JSON.stringify(data));
    },
  },
};
