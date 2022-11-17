import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        estaLogueado : false,
        peliculas: [],
        getPelis: 'http://localhost:8080/cineort/peliculas/',
        postPelis: 'http://localhost:8080/cineort/peliculas/',
    },
    actions : {
        
    },
    mutations : {
       
    }
})
