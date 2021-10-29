<template>
  <body id="poster">
    <div class="center-text">
      <h1 >610青训营</h1>
      <login/>
<!--      <div class="change">将大局逆转吧</div>-->
    </div>

  </body>
</template>


<script>
import Login from "../components/Login"
export default {
  name: "Hello",
  components:{Login,}
}
</script>

<style scoped>
.center-text{
  text-align: center;
}
#poster {
  background:url("../assets/changeover.jpeg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body{
  margin: 0px;
}
.change {
  margin:0px;
  padding:0;
  font-family:Arial,Helvetica,sans-serif;font-size:100%;
  font-family:Verdana;
  font-size:40px;

}
</style>