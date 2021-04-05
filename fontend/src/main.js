import Vue from 'vue'
import VeeValidate from 'vee-validate';
import App from './App.vue'
import router from './router'
import * as jquery from 'jquery'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

import './assets/styles.css'
import 'font-awesome/css/font-awesome.css'
import 'alertifyjs/build/css/alertify.css'
import * as alertify from 'alertifyjs'
import 'alertifyjs/build/css/themes/default.css'
import 'fullcalendar'
Vue.use(VeeValidate);

Vue.prototype.alertify = alertify;




Vue.config.productionTip = false
Vue.prototype.jquery = jquery;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
