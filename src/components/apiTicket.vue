<template >
  <div class="jumbotron">

    <button v-show="listaTickets.length <= 0" id="cent" class="btn btn-success my-3 mr-2"
      @click="getUltimo() && getTickets()">generar</button>


    <div align="center" id="jb1" class="jumbotron" v-if="listaTickets.length">
      <h1>ULTIMO TICKET</h1>
      <p>Resumen de tickets cod: {{ mockApi.codigo }}</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMgGQ_7ZIsf2m-f__IEUIf4aN72TtAIDhBCg&usqp=CAU"
        width="300">

      <p> Ticket nro : {{ ultimoTicket._id }}</p>
      <p> Fecha : {{ ultimoTicket.fecha }}</p>

      <div id="desc" class="jumbotron">
        <!-- <p> Pelicula comprada: {{this.peliculaEncontrada}}</p> -->
        <p> Pelicula comprada: {{this.ultimoTicket}}</p>
        <!-- <div align="center" v-for="(tick, index) in ultimoTicket.peliculas" v-bind:key="index">
          <p>{{ tick }}</p>
        </div> -->
      </div>
    </div>
    <div v-else>
      <div class="alert alert-info mt-2 ">Sin tickets</div>
    </div>

    <br><br><br> <br><br>
    <hr style="background-color: rgba(250, 235, 215, 0.700)">
    <h1>HISTORIAL DE TICKETS</h1>


    <div align="center" id="card" v-for="(ticket, index) in listaTickets" v-bind:key="index">
      <table>
        <div id="jb3" class="jumbotron">
          <tr>
            <p>Resumen de tickets cod: {{ mockApi.codigo }}</p>
          </tr>

          <tr><img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMgGQ_7ZIsf2m-f__IEUIf4aN72TtAIDhBCg&usqp=CAU"
              width="300"></tr><br>
          <tr>
            <p>ID: <b>{{ ticket._id }}</b></p>
          </tr>
          <tr>
            <p>Nro Pelicula: {{ ticket.idPelicula }}</p>
          </tr>
          <tr>
            <p>Cliente nro : <i>{{ ticket.idUsuario }}</i></p>
          </tr>
          <tr>
            <!-- <p>Pelicula: <i>{{ buscarPelicula(ticket.idPelicula) }}</i></p> -->
            <p>Funcion del dia nro: <i>{{ ticket.idFuncion }}</i></p>
          </tr>
          <tr>
            <p> Fecha: {{ convertirFecha(ticket.fecha) }}</p>
          </tr>
        </div>
      </table>
    </div>
  </div>
</template>

<script>



export default {
  name: 'src-components-api-ticket',
  props: [],
  mounted() {

  },
  data() {
    return {
      url: 'http://localhost:8080/cineort/tickets',
      mock: 'https://6353835fe64783fa827433c7.mockapi.io/mock/peliculas/',
      mockApi: [],
      listaTickets: [],
      usuarioUrl: 'http://localhost:8080/cineort/usuarios',
      peliculasUrl: 'http://localhost:8080/cineort/peliculas/',
      ultimo: 'http://localhost:8080/cineort/tickets/ultimoticket',
      historial: 'localhost:8080/cineort/tickets',
      historialTicketes: [],
      ultimoTicket: '',
      usuario: [],
      peli: [],
      peliculaEncontrada:[],
    }
  },
  methods: {
    
   async buscarPeliculaPorId(){

      let { data: pelicula } = await this.axios(this.$store.state.getPeliculaPorId +'/'+ this.ultimoTicket.idPelicula)
      this.peliculaEncontrada = pelicula;
    },
    convertirFecha(fecha) {
      return new Date(fecha).toLocaleString();
    },

    async getUltimo() {
      try {
        let { data: ticket } = await this.axios(this.$store.state.getUltimo)
        this.ultimoTicket = ticket
      } catch (error) {
        console.log('error en el getUltimo ' + error);
      }
    },

    async buscarPelicula(id) {
      try {
        let { data: peliculas } = await this.axios(this.peliculasUrl + id)
        return peliculas;
      } catch (error) {
        console.log(error);
      }
    },

    async getTickets() {
      try {
        let { data: tickets } = await this.axios(this.url)
        this.listaTickets = tickets;
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
#jb1 {
  margin: 0 auto;
  color: antiquewhite;
  background-color: rgb(100, 100, 100);
  width: 38rem;
  height: 45rem;
}

#jb3 {
  color: antiquewhite;
  background-color: rgb(68, 68, 68);

}

.jumbotron {
  background-color: rgb(32, 32, 32);

}

#desc {
  font-size: 10px;
}
</style>
