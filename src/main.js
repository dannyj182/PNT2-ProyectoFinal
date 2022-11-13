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
//https://vuex.vuejs.org/#what-is-a-state-management-pattern
//Instalación: npm i vuex@3
import store from './store'

import './axios'


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
