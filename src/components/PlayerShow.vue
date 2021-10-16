<template>
  <div>
    <div v-if="numOk===true">
      <Group></Group>
    </div>
  </div>
</template>

<script>
import Group from "./Group";
import {mapState} from "vuex/dist/vuex.mjs";

export default {
  name: "PlayerShow",
  data(){
    return{
      numOk:false,
      employees:[]
    }
  },
  computed:mapState({
    getData:function(state){
      let localData =JSON.parse( window.localStorage.getItem('employees'))
      if(state.employees.length==0&&localData){
        this.$store.commit('init',localData)//同步操作
      }
      return state.employees
    }
  }),
  mounted() {
    this.employees= this.getData
    if(this.$store.state.employees.length<10) {
      alert("人数不足10人");
      location.href="http://localhost:8080/#/app"
    }
    else if(this.$store.state.employees.length>10){
      alert("人数超过10人")
      location.href="http://localhost:8080/#/app"
    }
    else {
      this.numOk=true
    }
  },
  components:{
    Group
  }
}
</script>

<style scoped>

</style>