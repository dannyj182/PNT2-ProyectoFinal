<template>
  <div id ="app" class = "container-fluid mt-3">
    <div class="jumbotron">
      <Navbar/>
      <Carrusel/>
      <router-view></router-view>
      <Footer/>
    </div>
    
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Carrusel from './components/Carrusel.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Carrusel
  }
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
  </style>
s