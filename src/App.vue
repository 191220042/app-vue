<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      players: [],
    };
  },
  created() {
    this.getPlayers();
  },
  methods: {
    async getPlayers() {
      try {
        const response = await fetch("http://localhost:8083/players");
        const data = await response.json();
        this.players = data._embedded.players;
      } catch (error) {
        console.log(error);
      }
      this.$store.commit("init", this.players);
    },
  },
};
</script>

<style scoped></style>
