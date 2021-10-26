<template>
  <div>
    <div v-if="numOk === true">
      <Group></Group>
    </div>
    <div v-else>
      <h2>人员不足</h2>
    </div>
  </div>
</template>

<script>
import Group from "../components/Group";
import { mapState } from "vuex";

export default {
  name: "PlayerShow",
  data() {
    return {
      numOk: false,
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
    if (this.$store.state.players.length < 10) {
      alert("人数不足10人");
      // location.href = "http://localhost:8080/#/app";
    } else if (this.$store.state.players.length > 10) {
      alert("人数超过10人");
      // location.href = "http://localhost:8080/#/app";
    } else {
      this.numOk = true;
    }
  },
  components: {
    Group,
  },
};
</script>

<style scoped></style>
