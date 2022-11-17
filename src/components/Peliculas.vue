<template>
  <section>
    <div class="jumbotron">
      <br>
      <h2>Peliculas</h2>
      <br>
      
      <div class="d-inline" v-for="(pelicula,index) in peliculas" :key="index">
        <div class="d-inline" @click="mostrarPeli()">
          <img :src="pelicula.imagen" class="m-2" :alt="pelicula.nombre" :style="{ 'border-radius' : '10px' }">
        </div>
      </div>

    </div>
  </section>
</template>

<script>
  export default  {
    name: 'src-componentes-peliculas',
    components: {

    },
    props: [],
    data () {
      return {
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
      mostrarPeli(){
        console.log("mostrarPeli");
      }
    },
    mounted () {
        this.getPeliculas()
    },
  }
</script>

<style scoped lang="css">

</style>
