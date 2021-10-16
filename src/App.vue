<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      employees:[
      ]
    }
  },

  created(){
    this.getEmployees();
  },
  methods:{

    async getEmployees(){
      try{
        const response=await fetch("http://localhost:8083/employees");
        const data=await response.json();
        this.employees=data._embedded.employees;
      }catch(error){
        console.log(error);
      }
      this.$store.commit("init", this.employees);
    }
  }
}
</script>

<style scoped>

</style>