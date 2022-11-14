<template >
  <div class="jumbotron">
    <div align="center" class="card" v-for="(pelicula, index) in peliculas" v-bind:key="index">
      <!-- <img :src="pelicula.foto" class="mr-3" :alt="pelicula.nombre" width="200" :style="{ 'border-radius': '10px'}">   -->
      <table>
        <tr>
          <p>Resumen de ticket cod: {{ pelicula.codigo }}</p>
        </tr>
        <tr><img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMgGQ_7ZIsf2m-f__IEUIf4aN72TtAIDhBCg&usqp=CAU"
            width="300"></tr><br>
        <tr>
          <p>Nombre: <b>{{ pelicula.nombre }}</b></p>
        </tr>
        <tr>
          <p>Precio: $<i>{{ pelicula.precio }}</i></p>
        </tr>
        <tr>
          <p>Fecha: {{ convertirFecha(pelicula.fecha) }} am </p>
        </tr>

      </table>
    </div>
    <button id="cent" class="btn btn-danger my-3 mr-2" @click="getPeliculas()">GET</button>
  </div>
</template>

<script>

  export default  {
    name: 'src-components-api-ticket',
    props: [],
    mounted () {

    },
    data () {
      return {
      url: 'https://6353835fe64783fa827433c7.mockapi.io/mock/peliculas/',
      peliculas: []
    }
  },
  methods: {
    convertirFecha(fecha) {
      return new Date(fecha).toLocaleString();
    },

    getPlazo() {
      return new Date().toLocaleTimeString();
    },

    async getPeliculas() {
      try {
        let { data: peliculas } = await this.axios(this.url)
        this.peliculas = peliculas;
      } catch (error) {
        console.error('Error en el getUsuarios ' + error.message);
      }
    },
  },
  computed: {

  }
}


</script>

<style scoped lang="css">
   .card{
    margin: 0 auto;
    margin-left: 50rem;
    color: antiquewhite;
    width: 30rem;
    height: 20rem;
    font-size: large;
    text-align: center;
    background-color: rgb(68, 68, 68);
    padding-block: 2rem;
    margin-block: 2rem;
  }

  .jumbotron{
    background-color: rgb(32, 32, 32);
    text-align: center;
  }

</style>
