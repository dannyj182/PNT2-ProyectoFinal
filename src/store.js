import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        estaLogueado : false,
        esAdmin: false,
        failUser: false,
        peliculas: [],
        getPelis: 'http://localhost:8080/cineort/peliculas/',
        postPelis: 'http://localhost:8080/cineort/peliculas/',
        validateUser: 'http://localhost:8080/cineort/usuarios/validar/',
    },
    actions : {
       desloguearse({commit}){
        commit('desloguearse')   
       },
       loguearse({commit}) {
        commit('loguearse')  
       },
       failLogin({commit}){
        commit('failLogin')
       }
    },
    mutations : {
        desloguearse(state) {
            state.estaLogueado = false
            state.failUser = false
        },
        loguearse(state) {
            state.estaLogueado = true
        },
        failLogin(state){
            state.failUser = true
        }
    }
})