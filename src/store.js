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
        getFunciones: 'http://localhost:8080/cineort/funciones/obtenerPorPelicula',
        getPelis: 'http://localhost:8080/cineort/peliculas/',
        postPeli: 'http://localhost:8080/cineort/peliculas/',
        putPeli: 'http://localhost:8080/cineort/peliculas/',
        deletePeli: 'http://localhost:8080/cineort/peliculas/',
        postUsuarios: 'http://localhost:8080/cineort/usuarios/',
        validateUser: 'http://localhost:8080/cineort/usuarios/validar/',
        validateAdmin: 'http://localhost:8080/cineort/usuarios/validarAdmin/',
    },
    actions : {
       desloguearse({commit}){
        commit('desloguearse')   
       },
       loguearse({commit}, usuario) {
        commit('loguearse', usuario)  
       },

       loguearseAdmin({commit}, usuario){
        commit('loguearseAdmin', usuario) 
       },

       desloguearseAdmin({commit}){
        commit('desloguearseAdmin') 
       },

       failLogin({commit}){
        commit('failLogin')
       },
       cargarPeliculas({commit}, peliculas){
        commit('cargarPeliculas', peliculas)
       },
       agregarPelicula({commit}, pelicula){
        commit('agregarPelicula', pelicula)
       },
       borrarPelicula({commit}, id){
        commit('borrarPelicula', id)
       },
       updatePelicula({commit}, pelicula){
        commit('updatePelicula', pelicula)
       },
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

        loguearseAdmin(state, usuario){
            state.estaLogueado = true
            state.esAdmin =true;
            state.currentUser = usuario; // ?
        },

        desloguearseAdmin(state){
            state.estaLogueado = false;
            state.esAdmin = false;
            state.failUser =false;
            state.currentUser = null
        },
        failLogin(state){
            state.failUser = true
        },
        cargarPeliculas(state, peliculas){
            state.peliculas = peliculas
        },
        agregarPelicula(state, pelicula){
            state.peliculas.push(pelicula)
        },
        borrarPelicula(state, id){
            const index = state.peliculas.findIndex(pelicula => pelicula._id == id)
            state.peliculas.splice(index, 1)
        },
        updatePelicula(state, pelicula){
            const index = state.peliculas.findIndex(p => p._id == pelicula._id)
            state.peliculas.splice(index, 1, pelicula)
        },
    }
})