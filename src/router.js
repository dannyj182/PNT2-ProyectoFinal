import Vue from 'vue'
import VueRouter from 'vue-router'
import FormularioAv from './components/Formulario.vue'
Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/formulario', component: FormularioAv },
    ]
})