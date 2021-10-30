<template>
    <el-form class="login-container" label-position="left"
             label-width="0px">
      <h3 class="login_title">登录</h3>
      <el-form-item>
        <el-input type="text" v-model="loginForm.username"
                  auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="loginForm.password"
                  auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item  style="width: 100%">
        <el-button type="primary" style="width:80%;background: #505458;border: none;" v-on:click="login">登录</el-button>
      </el-form-item>
      <el-form-item>
        <div style="display: flex;justify-content: space-between">
            <router-link to="register" style="font-size:12px;color: cornflowerblue;text-decoration: underline;">还没有账号</router-link>
            <router-link to="register" style="font-size:12px;color: cornflowerblue;text-decoration: underline;">忘记密码</router-link>
        </div>
      </el-form-item>
    </el-form>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    login () {
      this.$axios
          .post('/login', {
            username: this.loginForm.username,
            password: this.loginForm.password
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              this.$router.replace({path: '/battle'})
            }
            else{
              this.$alert("密码错误")
            }
          })
          // .catch(failResponse => {
          // })

    }
  }

};
</script>

<style>


.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}


</style>
