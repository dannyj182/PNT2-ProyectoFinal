import Vue from "vue";
import VueRouter from "vue-router"

/* Componentes para rutas */
import Inicio from './components/Login.vue';
import Peliculas from './components/Peliculas.vue'
import Ticket from './components/Ticket.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/formulario'},
        {path : '/formulario' , component: Inicio },
        {path : '/peliculas' , component: Peliculas },
        {path : '/ticket' , component: Ticket }
    ]

})