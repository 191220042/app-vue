export default {
  state: {
    players: [],
  },
  mutations: {
    init(state, data) {
      state.players = data;
      window.localStorage.setItem("players", JSON.stringify(data));
    },
  },
};
