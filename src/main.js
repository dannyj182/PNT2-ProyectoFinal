import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


/* Formulario con vueForm */
import "./form"

/* Estilos */
import "./bootstrap"

/* ROUTER (vue-router) */
import {router} from "./router"

/* -------------- VUEX --------------- */
import store from './store'

/* -------------- GlobalMixins --------------- */
import './globalMixins'

/* -------------- GlobalFilters --------------- */
import './globalFilters'


/* -------------- axios --------------- */
import './axios'


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
