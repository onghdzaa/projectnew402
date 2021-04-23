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
import vueGeolocation from 'vue-browser-geolocation'
import * as map from 'vue2-google-maps'
import VueSession from 'vue-session'

// import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VeeValidate);
Vue.use(VueSession);
Vue.use(vueGeolocation);
Vue.prototype.alertify = alertify;
Vue.use(map,{
  load:{
    key:''
  }
  //,installComponents: false
});



Vue.config.productionTip = false
Vue.prototype.jquery = jquery;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
