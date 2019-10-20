import Vue from 'vue'
import App from './App.vue'

import VueMask from 'v-mask'

import * as VueGoogleMaps from "vue2-google-maps"

import Vuelidate from 'vuelidate'
// Plugins
Vue.use(Vuelidate)
Vue.use(VueMask);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBBW2OEoZdzWA_9SAp42t3u_wi0gyLWjLc",
    libraries: "places" // necessary for places input
  }
});

import './assets/scss/main.scss'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
