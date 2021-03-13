import Vue from 'vue'
import VeeValidate from 'vee-validate';
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import * as jquery from 'jquery'
import './assets/styles.css'

Vue.use(VeeValidate);

Vue.config.productionTip = false
Vue.prototype.jquery = jquery;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
