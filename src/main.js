import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import App from './App.vue'
import routes from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)

var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8083'
Vue.prototype.$axios = axios

new Vue({
  router: new VueRouter({
    routes: routes
  }),
  store: new Vuex.Store(store),
  render: h => h(App),
}).$mount('#app')
