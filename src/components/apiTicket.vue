<template >
  <section>
  <div class="jumbotron">

   <p class="ocultar">{{getUltimoTicket}}</p>

   <!-- <div class="jumbotron">
    <p>ticket : {{ultimoTicket}}</p>
   </div> -->

  
   <div align="center" id="jb1" class="jumbotron">
      <h1>ULTIMO TICKET</h1>
      <p>Resumen de tickets cod: {{ mockApi }}</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMgGQ_7ZIsf2m-f__IEUIf4aN72TtAIDhBCg&usqp=CAU"
        width="300">

      <p>Ticket nro : {{ ultimoTicket._id }}</p>
      <p>Fecha : {{ ultimoTicket.fecha }}</p>
      <p>Nro de Cliente : {{ultimoTicket.idUsuario}}</p>
      <div v-for="(peli, index) in pelicula" :key="index">
        <div v-if="peli._id == ultimoTicket.idPelicula">
          <p>Nombre : {{peli.nombre}}</p>
          <p>Precio: ${{peli.precio}}</p>
          <p>Duracion : {{peli.duracion}}</p>
          <img :src="peli.imagen">
        </div>
      </div>
      

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
            <p>Funcion del dia nro: <i>{{ ticket.idFuncion }}</i></p>
          </tr>
          <tr>
            <p> Fecha: {{ convertirFecha(ticket.fecha) }}</p>
          </tr>
        </div>
      </table>

    </div> 

    
  </div>
</section>
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
      mockApi: '',
      
      usuarioUrl: 'http://localhost:8080/cineort/usuarios',
      peliculasUrl: 'http://localhost:8080/cineort/peliculas/',
      ultimo: 'http://localhost:8080/cineort/tickets/ultimoticket',
      historial: 'localhost:8080/cineort/tickets',
      ultimoTicket: null,
      pelicula:[],
      listaTickets: [],
    }
  },
  methods: {

     async getData(){
      try {
        await this.buscarPelicula(),
        await this.getTicket(),
      await this.getUltimo()
      // await this.getMock()
        
      } catch (error) {
        console.log(error);
      }
      
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

    async buscarPelicula() {
      try {
        let { data : pelicula } =  await this.axios.post(this.$store.state.getPeliculaPorId, this.ultimoTicket.idPelicula, { 'content-type' : 'application/json' })
          this.pelicula = pelicula;
      } catch (error) {
        console.log(error);
      }
    },

    async getTicket() {
      try {
        let { data: tickets } = await this.axios(this.$store.state.getTickets)
        this.listaTickets = tickets;
      } catch (error) {
        console.error('Error en el getTickets ' + error.message);
      }
    },
    async getMock() {
      try {
        let { data: peliculas } = await this.axios(this.mock)
        this.mockApi = peliculas.codigo;
      } catch (error) {
        console.error('Error en el getTickets ' + error.message);
      }
    },
  },
  computed: {
    getUltimoTicket(){
      return this.getData()
    }
  }
}


</script>

<style scoped lang="css">
section{
  font-family: Verdana, Geneva, Tahoma, sans-serif
}


#jb1 {
  margin: 0 auto;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
  width: 38rem;
  height: 50rem;
}

#jb3 {
  color: antiquewhite;
  background-color: rgb(68, 68, 68);

}

.jumbotron{
  background-color:  rgba(0, 0, 0, 0.589);
}

#desc {
  font-size: 10px;
}
.ocultar{
  color: rgba(0, 0, 0, 0);
}

img{
  width: 200px;
}
</style>
