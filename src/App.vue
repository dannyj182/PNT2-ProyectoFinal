<template>
  <div class="container-fluid mt-3">
  <div id="app" class="jumbotron">
    <NavBar/>
    <router-view></router-view>
  </div>
  <div id="app">
      <AppSlider :slides="slides" />
    </div>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

#Carousel {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
}
#imagen {
    width: 100%;
    height: 400px;
    background-size: cover;
}

</style>
