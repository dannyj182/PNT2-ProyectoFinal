import Vue from "vue";
import VueRouter from "vue-router"

/* Componentes para rutas */
import Inicio from './components/Login.vue';
import Peliculas from './components/Peliculas.vue'
import Ticket from './components/Ticket.vue'
import ABMPelicula from './components/ABMPelicula.vue'
import Formusuario from './components/FormUsuario.vue'
import Perfil from './components/Perfil.vue'
import Estadistica from './components/Estadistica.vue'
import Configuraciones from './components/Configuraciones.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/login'},
        {path : '/login' , component: Inicio },
        {path : '/peliculas' , component: Peliculas },
        {path : '/ticket' , component: Ticket },
        {path : '/abmPelicula' , component: ABMPelicula },
        {path : '/formUsuario' , component: Formusuario },
        {path : '/perfil' , component: Perfil },
        {path : '/estadistica' , component: Estadistica },
        {path : '/configuraciones' , component: Configuraciones},
        
    ]

})