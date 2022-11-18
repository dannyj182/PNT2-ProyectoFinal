<template>
  <section>
    <div class="jumbotron">
      <h2>Peliculas</h2>
      <div v-show="showPeli[0].valor">
        <Pelicula :pelicula="pelicula" :showPeli="showPeli"/>
      </div>
      <br>
      <div class="d-inline" v-for="(pelicula,index) in peliculas" :key="index">
        <div class="d-inline" @click="mostrarPeli(pelicula)">
          <img :src="pelicula.imagen" class="m-2" :alt="pelicula.nombre" :style="{ 'border-radius' : '10px' }">
        </div>
      </div>
    </div>
   <!--  <FormularioPeli/> -->
  </section>
</template>

<script>
  import Pelicula from './Pelicula.vue'
  /* import FormularioPeli from './FormularioPeli.vue' */

  export default  {
    name: 'src-componentes-peliculas',
    components: {
      Pelicula,
      /* FormularioPeli */
    },
    props: [],
    data () {
      return {
        showPeli: [{valor: false}],
        pelicula: {},
        peliculas: []
      }
    },
    methods: {
      async getPeliculas() {
        try {
          let { data : peliculas } = await this.axios(this.$store.state.getPelis)
          this.peliculas = peliculas
        }
        catch(error) {
          console.error('Error en getPeliculas', error.message)
        }
      },
      mostrarPeli(pShow){
        this.showPeli[0].valor = true
        this.pelicula = pShow
      }
    },
    computed: {
      
    },
    mounted () {
        this.getPeliculas()
    },
  }
</script>

<style scoped lang="css">

</style>
