import Vue from 'vue'

const miMixinGlobal = {
    methods:{
        loguearse(usuario){
            this.$store.dispatch('loguearse', usuario)
        },

        desloguearse(){
            alert('Le esperamos nuevamente')
            this.$store.dispatch('desloguearse')
            this.$store.dispatch('desloguearseAdmin')
            this.$router.push('/')
        },

        loguearseAdm(usuario){
            this.$store.dispatch('loguearseAdmin', usuario)
        },

        volverPeliculas(){
            this.$router.push('/peliculas')
        },

        irAdmPelis(){
            this.$router.push('/abmPelicula')
        },
        irEstadistica(){
            this.$router.push('/estadistica')
        },
        irPerfil(){
            this.$router.push('/perfil')
        },

        irForm(){
            this.$router.push('/formUsuario')
        }
    },

    computed: {
        mostrarHoraActual(){
            let hr = new Date().toLocaleDateString()
            return hr
        },

        mostrarTipoDePerfil() {
            let mensaje;
            if (this.$store.state.esAdmin) {
                mensaje = 'Perfil Administrador'
            } else if (!this.$store.state.esAdmin && this.$store.state.estaLogueado) {
                mensaje = 'Perfil Usuario'
            }
            else {
                mensaje = 'Sin registrar'
            }

            return mensaje
        }
    }
}

Vue.mixin(miMixinGlobal)