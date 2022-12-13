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
  
  },
  mounted () {

  },
}
</script>

<style>
  h1 {
    color: rgb(85, 30, 57);
  }
  

 @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;400;500&display=swap');;

  html, body {
    font-family: 'Raleway', sans-serif;
  }

  #app {
    font-family: 'Raleway', sans-serif;
  }

  .perfil{
    font-size: larger;
    color: crimson;
  }
  </style>
s