<template>
  <div class="center-text">
    <el-row :gutter="20" type="flex" class="row-bg" justify="center">
      <el-col>
        <el-table :data="oneGroup" border style="width: 100%">
          <el-table-column prop="name" label="Player" width="280"/>
          <el-table-column prop="score" label="Score" width="280"/>
        </el-table>
      </el-col>

      <el-col>
        <el-table :data="twoGroup" border style="width: 100%">
          <el-table-column prop="name" label="Player" width="280"/>
          <el-table-column prop="score" label="Score" width="280"/>
        </el-table>
      </el-col>
    </el-row>

    <el-divider></el-divider>

    <el-row>
      <el-button @click="shuffle" type="primary">重新分组</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Group",
  mounted() {
    this.players = this.$store.state.players.map((player) => ({
      name: player.name,
      score: player.score,
    }));

    this.shuffle()
  },
  methods: {
    /** 采用洗牌算法进行随机分组 */
    shuffle() {
      const source = this.players;

      for (let i = source.length; i > 1; --i) {
        const random = Math.floor(Math.random() * i);
        let temp = source[random];
        source[random] = source[i - 1];
        source[i - 1] = temp;
      }

      this.oneGroup = source.slice(0,5)
      this.twoGroup = source.slice(5,10)
    },
  },
  data() {
    return {
      players: [],
      oneGroup:[],
      twoGroup:[]
    };
  },
};
</script>

<style>
el-row {
  margin-bottom: 20px;
}
el-col {
  border-radius: 4px;
}

.row-bg {
  padding: 10px 0;
  background-color: #359123;
}

.center-text {
  text-align: center;
}
</style>
