import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        estaLogueado : true,
        getPelis: 'http://localhost:8082/cineort/peliculas/',
    },
    actions : {
       desloguearse({commit}){
            commit('desloguearse')   
       },
       loguearse({commit}) {
        commit('loguearse')  
    },
        
    },
    mutations : {
        desloguearse(state) {
            state.estaLogueado = false
        },
        loguearse(state) {
            state.estaLogueado = true
        },
    }
})
