<template>
  <div id="battle">
    <h1>Players</h1>
    <player-form v-on:add:player="addPlayer" />
    <player-table
      v-bind:players="players"
      v-on:delete:player="deletePlayer"
      v-on:edit:player="editPlayer"
    />
    <router-link to="/playerShow">Battle</router-link>
  </div>
</template>

<script>
import PlayerTable from "../components/PlayerTable";
import PlayerForm from "../components/PlayerForm";
import { mapState } from "vuex";

export default {
  name: "Battle",
  components: {
    PlayerTable,
    PlayerForm,
  },
  data() {
    return {
      players: [],
    };
  },
  computed: mapState({
    getData: function(state) {
      let localData = JSON.parse(window.localStorage.getItem("players"));
      if (state.players.length == 0 && localData) {
        this.$store.commit("init", localData); //同步操作
      }
      return state.players;
    },
  }),
  mounted() {
    this.players = this.getData;
  },
  methods: {
    addPlayer(player) {
      const lastId =
        this.players.length > 0
          ? this.players[this.players.length - 1].id
          : 0;
      const id = lastId + 1;
      const newPlayer = { ...player, id };
      this.players = [...this.players, newPlayer];
      fetch(`http://localhost:8083/players/${id}`, {
        method: "PUT",
        // Headers : new  Headers({
        //   'Access-Control-Allow-Origin':'*',
        //   "Content-Type":'text/plain'
        // }),
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          name: player.name,
          score: player.score,
        }),
      })
        .then((res) => res.text())
        .then(console.log);

      this.$store.commit("init", this.players);
    },
    deletePlayer(id) {
      this.players = this.players.filter((player) => player.id != id);
      fetch(`http://localhost:8083/players/delete/${id}`, {
        method: "DELETE",
        // Headers : new  Headers({
        //   'Access-Control-Allow-Origin':'*',
        //   "Content-Type":'text/plain'
        // }),
        headers: {
          "content-Type": "application/json",
        },
      })
        .then((res) => res.text())
        .then(console.log);

      this.$store.commit("init", this.players);
    },
    editPlayer(id, updatePlayer) {
      this.players = this.players.map((player) =>
        player.id == id ? updatePlayer : player
      );

      fetch(`http://localhost:8083/players/${id}`, {
        method: "PUT",
        // Headers : new  Headers({
        //   'Access-Control-Allow-Origin':'*',
        //   "Content-Type":'text/plain'
        // }),
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          name: updatePlayer.name,
          score: updatePlayer.score,
        }),
      })
        .then((res) => res.text())
        .then(console.log);

      this.$store.commit("init", this.players);
    },
  },
};
</script>

<style scoped></style>
