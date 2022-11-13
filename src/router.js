import Vue from "vue";
import VueRouter from "vue-router"

/* Componentes para rutas */
import Formulario from './components/Formulario.vue';
import Peliculas from './components/Peliculas.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/formulario'},
        {path : '/formulario' , component: Formulario },
        {path : '/peliculas' , component: Peliculas }

    ]

})