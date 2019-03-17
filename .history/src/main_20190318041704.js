import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routes,
}).$mount('#app')
