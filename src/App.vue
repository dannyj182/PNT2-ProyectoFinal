<template>
  <div >
  

      <Navbar/>
      <router-view></router-view>
      <Footer/>

    
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
  methods: {
    async getPeliculas() {
      try {
        let { data : peliculas } = await this.axios(this.$store.state.getPelis)
        this.$store.dispatch('cargarPeliculas', peliculas)
      }
      catch(error) {
        console.error('Error en getPeliculas', error.message)
      }
    }
  },
  mounted () {
    this.getPeliculas()
  },
}
</script>

<style>
  h1 {
    color: rgb(85, 30, 57);
  }

 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

  html, body {
    font-family: 'Roboto', sans-serif;
  }

  #app {
    font-family: 'Poppins', sans-serif;
  }

  .perfil{
    font-size: larger;
    color: crimson;
  }
  </style>
s