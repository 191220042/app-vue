import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from '../src/router/router'
import store from './vuex/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)


const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
