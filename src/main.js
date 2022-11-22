import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';

import './scss/style.css'
import './css/style.css'
import './css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sweetalert2/dist/sweetalert2.min.css';

import './js/main'
import './js/mixitup.min.js'


if (localStorage.users === undefined) {
  let users = [
    {
      username: "admin",
      email: "admin@gmail.coma",
      password: "admin",
    },
  ];
  localStorage.setItem("users", JSON.stringify(users));
}

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueAxios, { $request: axios })
Vue.use(VueSweetalert2);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})