// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Notifications from 'vue-notification'
import store from './store/index'
Vue.config.productionTip = false
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.use(Notifications)
/* eslint-disable no-new */
const $ = require('jquery');
// We declare it globally
window.$ = $;
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

