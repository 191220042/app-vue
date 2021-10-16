<template>
  <div class="center-text">
    <el-row  :gutter="20" type="flex" class="row-bg" justify="center" >
      <el-col>
        <el-table
            :data="oneGroup"
            border
            style="width: 100%"
        v-loading="loading">
          <el-table-column
              prop="name"
              label="Player"
              width="180">
          </el-table-column>
          <el-table-column
              prop="score"
              label="Score"
              width="180">
          </el-table-column>
        </el-table>
      </el-col>

      <el-col>
        <el-table
            :data="twoGroup"
            border
            style="width: 100%">
          <el-table-column
              prop="name"
              label="Player"
              width="180">
          </el-table-column>
          <el-table-column
              prop="score"
              label="Score"
              width="180">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <el-divider></el-divider>

    <el-row>
      <el-button @click="refresh"
                 type="primary">重新分组</el-button>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "Group",
  mounted() {
    this.newAarry=[false,false,false,false,false,
      false,false,false,false,false]
    this.getGroup();
    for(let i=0;i<10;i++){
      if(this.newAarry[i]===true){
       let newPlayer={name:this.$store.state.employees[i].name,
            score:this.oneGroup.score=this.$store.state.employees[i].role}
        this.oneGroup=[...this.oneGroup,newPlayer]
      }
      else{
        let newPlayer={name:this.$store.state.employees[i].name,
          score:this.oneGroup.score=this.$store.state.employees[i].role}
        this.twoGroup=[...this.twoGroup,newPlayer]
      }
    }
    console.log(this.oneGroup)
    console.log(this.twoGroup)
  },
  methods:{
    getRandom(num1,num2){
    let transition = num2-num1;
    let ran = Math.floor(Math.random()*transition+num1);
    return ran;
  },

    getGroup(){
      for(let i=0;i<5;){
        let result = this.getRandom(0,10);
        if(this.newAarry[result]===false){
          i++;
          this.newAarry[result]=true
        }
      }
    },

    refresh(){
      this.newAarry=[false,false,false,false,false,
        false,false,false,false,false]
      this.getGroup();
      for(let i=0;i<10;i++){
        if(this.newAarry[i]===true){
          let newPlayer={name:this.$store.state.employees[i].name,
            score:this.oneGroup.score=this.$store.state.employees[i].role}
          this.oneGroup=[...this.oneGroup,newPlayer]
        }
        else{
          let newPlayer={name:this.$store.state.employees[i].name,
            score:this.oneGroup.score=this.$store.state.employees[i].role}
          this.twoGroup=[...this.twoGroup,newPlayer]
        }
      }
    },

    watch:{
      oneGroup:{
        handler(){
        },
        deep:true //true 深度监听
      }
    }
  },
  data(){
    return{
      newAarry:[],
      oneGroup:[],
      twoGroup:[],

    }

  }


}
</script>

<style >
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

.center-text{
  text-align: center;
}
</style>