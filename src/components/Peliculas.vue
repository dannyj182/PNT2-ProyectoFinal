import 

<template>

  <section class="src-componentes-peliculas">
    <div class="jumbotron">
      <h2>Peliculas</h2>
      <Carrusel/>
      <FormularioPeli/>
      <hr>
      <hr>
      <br>
      
    </div>
  </section>
</template>
<script>

import FormularioPeli from './FormularioPeli.vue'
import Carrusel from './Carrusel.vue'


  export default  {
    name: 'src-componentes-peliculas',
    components: {
    FormularioPeli,
    Carrusel
    },
    props: [],

    data () {
      return {
         
      }
    },
    methods: {
    
  }
  }

</script>

<style scoped lang="css">
  .src-componentes-peliculas {

  }

  .jumbotron {
    background-color: teal;
    color: white;
  }

  hr {
    background-color: #bbb;
  }

</style>
