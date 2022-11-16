<template >
  <div class="jumbotron">

    <button id="cent" class="btn btn-danger my-3 mr-2" @click="getTickets()">GET</button>


    <div align="center" id="jb1" class="jumbotron">
      <h1>ULTIMO TICKET</h1>
      <p>Resumen de tickets cod: {{ mockApi.codigo }}</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMgGQ_7ZIsf2m-f__IEUIf4aN72TtAIDhBCg&usqp=CAU"
          width="300">
        <p>ID: <b>{{ this.tickets._id }}</b></p>
        <p>Sala: {{ this.tickets.idSala }}</p>
        <p>Cliente: <i>{{ this.tickets.idUsuario }}</i></p>
        <!-- <p>Pelicula: <i>{{ this.tickets.idPelicula }}</i></p> -->
        <p>Pelicula {{ this.tickets.idPelicula }}</p>
        <p> Fecha: {{ convertirFecha(this.tickets.fecha) }}</p>
        <!-- <p>Usuario : {{buscarUsuario(this.tickets.nombreUsuario).nombre}}</p> -->
        </div>

       <br><br><br> <br><br><hr>
        <h1>HISTORIAL DE TICKETS</h1>
        
    
     <div align="center" class="card" v-for="(ticket, index) in tickets" v-bind:key="index">
      <table>
        <tr>
          <p>Resumen de tickets cod: {{ mockApi.codigo }}</p>
        </tr>
        <tr><img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMgGQ_7ZIsf2m-f__IEUIf4aN72TtAIDhBCg&usqp=CAU"
            width="300"></tr><br>
        <tr>
          <p>ID: <b>{{ tickets._id }}</b></p>
        </tr>
        <tr>
          <p>Sala: {{ tickets.idSala }}</p>
        </tr>
        <tr>
          <p>Cliente: <i>{{ tickets.idUsuario }}</i></p>
        </tr>
        <tr>
          <!-- <p>Pelicula: <i>{{ buscarPelicula(tickets.idPelicula) }}</i></p> -->
          <p>Pelicula: <i>{{ tickets.idPelicula }}</i></p>
        </tr>
        <tr>
          <p> Fecha: {{ convertirFecha(tickets.fecha) }}</p>
        </tr>

      </table>
    </div> 
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
      url: 'http://localhost:8080/cineort/tickets',
      mock: 'https://6353835fe64783fa827433c7.mockapi.io/mock/peliculas/',
      mockApi: [],
      tickets : [],
      usuarioUrl: 'http://localhost:8080/cineort/usuarios',
      peliculasUrl:'http://localhost:8080/cineort/peliculas/',
      usuario:[],
      peli: [],
    }
  },
  methods: {
    convertirFecha(fecha) {
      return new Date(fecha).toLocaleString();
    },

    // async buscarUsuario(nombre){
    //      let { data: usuarios } = await this.axios(this.usuarioUrl+ '/' + nombre)
    //      return usuarios;
    // },

    async buscarPelicula(id){
      try {
        let { data: peliculas } = await this.axios(this.peliculasUrl+ id)
        return  peliculas;
      } catch (error) {
        console.log(error);
      }
    },

    async getTickets() {
      try {
        let { data: tickets } = await this.axios(this.url)
        this.tickets = tickets;
      } catch (error) {
        console.error('Error en el getTickets ' + error.message);
      }
    },
    async getMock() {
      try {
        let { data: peliculas } = await this.axios(this.mock)
        this.mockApi = peliculas;
      } catch (error) {
        console.error('Error en el getTickets ' + error.message);
      }
    },
  },
  computed: {

  }
}


</script>

<style scoped lang="css">

#jb1{
  margin: 0 auto;
  color: antiquewhite;
    background-color: rgb(100, 100, 100);
    width: 30rem;
    height: 32rem;
  }


   .card{
    margin: 0 auto;
    margin-left: 50rem;
    color: antiquewhite;
    width: 30rem;
    height: 28rem;
    font-size: large;
    text-align: center;
    background-color: rgb(68, 68, 68);
    padding-block: 2rem;
    margin-block: 2rem;
  }

  .jumbotron{
    background-color: rgb(32, 32, 32);
    text-align: center
  }



</style>
