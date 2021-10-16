<template>
  <div class="center-text">
    <el-row :gutter="20" type="flex" class="row-bg" justify="center">
      <el-col>
        <el-table :data="oneGroup" border style="width: 100%">
          <el-table-column prop="name" label="Player" width="180"/>
          <el-table-column prop="score" label="Score" width="180"/>
        </el-table>
      </el-col>

      <el-col>
        <el-table :data="twoGroup" border style="width: 100%">
          <el-table-column prop="name" label="Player" width="180"/>
          <el-table-column prop="score" label="Score" width="180"/>
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
    this.employees = this.$store.state.employees.map((employee) => ({
      name: employee.name,
      score: employee.role,
    }));

    this.shuffle()
  },
  methods: {
    /** 采用洗牌算法进行随机分组 */
    shuffle() {
      const source = this.employees;

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
      employees: [],
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
  background-color: #f9fafc;
}

.center-text {
  text-align: center;
}
</style>
