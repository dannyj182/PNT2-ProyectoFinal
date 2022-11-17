import 

<template>

  <section>
    <div class="jumbotron">
      <Carrusel/>
      <!-- <FormularioPeli/> -->
      <br>
      <h2>Peliculas</h2>
      <br>
      
      <div class="d-inline" v-for="(pelicula,index) in peliculas" :key="index">
        <div class="d-inline" @click="metodo()">
          <img :src="pelicula.imagen" class="m-2" :alt="pelicula.nombre" :style="{ 'border-radius' : '10px' }">
        </div>
      </div>

    </div>
  </section>
</template>
<script>

/* import FormularioPeli from './FormularioPeli.vue' */
import Carrusel from './Carrusel.vue'

  export default  {
    name: 'src-componentes-peliculas',
    components: {
    /* FormularioPeli, */
    Carrusel
    },
    props: [],

    data () {
      return {
        url: 'http://localhost:8080/cineort/peliculas/',
        peliculas: []
      }
    },
    methods: {
      async getPeliculas() {
        try {
          let { data : peliculas } = await this.axios(this.url)
          this.peliculas = peliculas
        }
        catch(error) {
          console.error('Error en getPeliculas', error.message)
        }
      },
      metodo(){
        console.log("Probar");
      }
  },
  mounted () {
      this.getPeliculas()
  },
  }

</script>

<style scoped lang="css">
  .jumbotron {
    background-color: teal;
    color: white;
  }
  hr {
    background-color: #bbb;
  }
</style>
