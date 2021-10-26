<template>
  <div id="player-table">
    <table>
      <thead>
        <tr>
          <th>Player name</th>
          <th>Score</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in players" :key="player.id">
          <td v-if="editing == player.id">
            <input type="text" v-model="player.name" />
          </td>
          <td v-else>{{ player.name }}</td>
          <td v-if="editing == player.id">
            <input type="text" v-model="player.score" />
          </td>
          <td v-else>{{ player.score}}</td>
          <td v-if="editing == player.id">
            <button @click="editplayer(player)">Save</button>
            <button @click="cancelEdit(player)">Cancel</button>
          </td>
          <td v-else>
            <button @click="editMode(player)">Edit</button>
            <button @click="handleDelete(player.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "player-table",
  props: {
    players: Array,
  },
  data() {
    return {
      editing: null,
    };
  },
  methods: {
    handleDelete(id) {
      this.$emit("delete:player", id);
    },
    cancelEdit(player) {
      Object.assign(player, this.cacheplayer);
      this.editing = null;
    },
    editMode(player) {
      this.cacheplayer = Object.assign({}, player);
      this.editing = player.id;
    },
    editplayer(player) {
      if (player.name == "" || player.id == "") return;
      this.$emit("edit:player", player.id, player);
      this.editing = null;
    },
  },
};
</script>



<style scoped></style>
