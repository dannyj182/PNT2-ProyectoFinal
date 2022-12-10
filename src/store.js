import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        estaLogueado : false,
        usuarioActual: null,
        esAdmin: false,
        failUser: false,
        currentUser: null,
        peliculas: [],
        idUser: null,
        getFunciones: 'http://localhost:8080/cineort/funciones/obtenerPorPelicula',
        getPelis: 'http://localhost:8080/cineort/peliculas/',
        getUltimo: 'http://localhost:8080/cineort/tickets/ultimoticket',
        getTickets: 'http://localhost:8080/cineort/tickets',
        postPeli: 'http://localhost:8080/cineort/peliculas/',
        putPeli: 'http://localhost:8080/cineort/peliculas/',
        deletePeli: 'http://localhost:8080/cineort/peliculas/',
        postUsuarios: 'http://localhost:8080/cineort/usuarios/',
        validateUser: 'http://localhost:8080/cineort/usuarios/validar/',
        validateAdmin: 'http://localhost:8080/cineort/usuarios/validarAdmin/',
        updateComprarPeli: 'http://localhost:8080/cineort/usuarios/comprar',
        getPeliculaPorId: 'http://localhost:8080/cineort/peliculas/obtenerpeli',
        updateUsuario: 'http://localhost:8080/cineort/usuarios/editar',

        getFuncionesMas: 'http://localhost:8080/cineort/funciones/masVendida',
        getFuncionesMenos: 'http://localhost:8080/cineort/funciones/menosVendida',
        getPeliculaPrecioCara: 'http://localhost:8080/cineort/peliculas/precio/cara',
        getPeliculaPrecioBarata: 'http://localhost:8080/cineort/peliculas/precio/barata',
        getPeliculaDuracionLarga: 'http://localhost:8080/cineort/peliculas/duracion/larga',
        getPeliculaDuracionCorta: 'http://localhost:8080/cineort/peliculas/duracion/corta',
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
            state.usuarioActual = null,
            state.estaLogueado = false
            state.failUser = false
            state.currentUser = null
            state.idUser = null
        },
        loguearse(state, usuario) {
            state.usuarioActual = usuario
            state.estaLogueado = true
            state.currentUser = usuario
            state.idUser = usuario._id
        },

        loguearseAdmin(state, usuario){
            state.usuarioActual = usuario
            state.estaLogueado = true
            state.esAdmin =true;
            state.currentUser = usuario; // ?
            state.idUser = usuario._id
        },

        desloguearseAdmin(state){
            state.estaLogueado = false;
            state.esAdmin = false;
            state.failUser =false;
            state.currentUser = null
            state.idUser = null
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
    },
    plugins:[
        new VuexPersistence({
            storage: window.localStorage
        }).plugin
    ]
})