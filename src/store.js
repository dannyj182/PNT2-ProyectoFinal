import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        estaLogueado : false,
        esAdmin: false,
        failUser: false,
        currentUser: null,
        peliculas: [],
        getPelis: 'http://localhost:8080/cineort/peliculas/',
        postPelis: 'http://localhost:8080/cineort/peliculas/',
        validateUser: 'http://localhost:8080/cineort/usuarios/validar/',
    },
    actions : {
       desloguearse({commit}){
        commit('desloguearse')   
       },
       loguearse({commit}, usuario) {
        commit('loguearse', usuario)  
       },
       failLogin({commit}){
        commit('failLogin')
       }
    },
    mutations : {
        desloguearse(state) {
            state.estaLogueado = false
            state.failUser = false
            state.currentUser = null
        },
        loguearse(state, usuario) {
            state.estaLogueado = true
            state.currentUser = usuario
        },
        failLogin(state){
            state.failUser = true
        }
    }
})