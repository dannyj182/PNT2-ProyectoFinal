import Vue from "vue";
import VueRouter from "vue-router"

/* Componentes para rutas */
import Inicio from './components/Login.vue';
import Peliculas from './components/Peliculas.vue'
import Ticket from './components/Ticket.vue'
import Compra from './components/Compra.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/login'},
        {path : '/login' , component: Inicio },
        {path : '/peliculas' , component: Peliculas },
        {path : '/ticket' , component: Ticket },
        {path : '/comprar' , component: Compra }
    ]

})