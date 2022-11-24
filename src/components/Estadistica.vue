<template>

  <section >
    <Configuraciones/>
    <div id="jb1" class="jumbotron">
      <p class="ocultar">{{obtenerTodo}}</p>
      <p class="intro">Señor/a administrador, recuerde que los datos son referenciales por ende no determinan informacion
        concluyente si no una estimacion de los mismos. <br>
        Al momento de borrar y/o editar alguna pelicula notifique al equipo de trabajo correspondiente. Muchas gracias
      </p><br><br>
      <hr><br><br>
    
      <!-- <button class="btn btn-danger mb-3" @click="getTodo()">Obtener estadistica</button> -->
      <div align="center">
        <h1>Estadistica de Peliculas</h1>
      </div><br>
    
    
      <div>
        <table align="center">
          <th>
            <div align="center" id="jb2" class="jumbotron">
              <h2>Pelicula mas cara</h2>
              <img :src="peliculasMasCaras.imagen" class="m-3" :style="{ 'border-radius': '10px' }">
              <p> Nombre {{peliculasMasCaras.nombre}}</p>
              <p> Duracion {{peliculasMasCaras.duracion}}</p>
              <p> Precio ${{peliculasMasCaras.precio}}</p>
            </div>
          </th>
    
          <th>
            <div align="center" id="jb2" class="jumbotron">
              <h2>Pelicula mas Barata</h2>
              <img :src="peliculasMasBaratas.imagen" class="m-3" :style="{ 'border-radius': '10px' }">
              <p> Nombre {{peliculasMasBaratas.nombre}}</p>
              <p> Duracion {{peliculasMasBaratas.duracion}}</p>
              <p> Precio ${{peliculasMasBaratas.precio}}</p>
            </div>
          </th>
          <th>
            <div align="center" id="jb2" class="jumbotron">
              <h2>Pelicula con mayor duracion</h2>
              <img :src="peliculasMasLargas.imagen" class="m-3" :style="{ 'border-radius': '10px' }">
              <p> Nombre {{peliculasMasLargas.nombre}}</p>
              <p> Duracion {{peliculasMasLargas.duracion}}</p>
              <p> Precio ${{peliculasMasLargas.precio}}</p>
            </div>
          </th>
          <th>
            <div align="center" id="jb2" class="jumbotron">
              <h2>Pelicula con menor duracion</h2>
              <img :src="peliculasMasCortas.imagen" class="m-3" :style="{ 'border-radius': '10px' }">
              <p> Nombre {{peliculasMasCortas.nombre}}</p>
              <p> Duracion {{peliculasMasCortas.duracion}}</p>
              <p> Precio ${{peliculasMasCortas.precio}}</p>
            </div>
    
          </th>
        </table>
    
        
      </div><hr><br><br><br><br>
      
      <h1 align="center">Estadistica de Funciones</h1>
      <div align="center">
        <div id="jb3" class="jumbotron">
    
    <div>
      <h2>Funcion mas vendidas</h2>
      <p> Numero : {{funcionesMasVendidas._id}}</p>
      <p> Capacidad {{funcionesMasVendidas.capacidad}}</p>
      <p> Fecha {{funcionesMasVendidas.fecha}}</p>
    </div>

  </div>

  <div id="jb3" class="jumbotron">


    <div>
      <h2>Funcion menos vendidas</h2>
      <p> Numero : {{funcionesMenosVendidas._id}}</p>
      <p> Capacidad {{funcionesMenosVendidas.capacidad}}</p>
      <p> Fecha {{funcionesMenosVendidas.fecha}}</p>
    </div>
  </div>

      </div>
    
    </div>
    </section>

</template>

<script>
import Configuraciones from '../components/Configuraciones.vue'
  export default  {
    
    name: 'src-components-estadistica',
    components: {
    Configuraciones,
  },
    props: [],
    mounted () {

    },
    data () {
      return {
        funcionesMasVendidas:[],
        funcionesMenosVendidas:[],
        peliculasMasBaratas:[],
        peliculasMasCaras:[],
        peliculasMasLargas:[],
        peliculasMasCortas:[],
      }
    },
    methods: {
      
     /*  convertirFecha(fecha) {
        console.log( fecha)
      return fecha
    },
 */


      async getTodo() {
        await this.getFuncionMas(),
        await this.getFuncionMenos()
        await this.getPeliBarata()
        await  this.getPeliCara()
        await this.getPeliCorta()
        await this.getPeliLarga()
      },

    async getFuncionMas() {
      try {
        let { data: funcion } = await this.axios(this.$store.state.getFuncionesMas)
        this.funcionesMasVendidas = funcion;
        console.log(this.funcionesMasVendidas)
      } catch (error) {
        console.log('error en el getFuncionMas ' + error);
      }
    },


    async getFuncionMenos() {
      try {
        let { data: funcion } = await this.axios(this.$store.state.getFuncionesMenos)
        this.funcionesMenosVendidas = funcion;
        console.log(this.funcionesMenosVendidas)
      } catch (error) {
        console.log('error en el getFuncionMenos ' + error);
      }
    },

    async getPeliBarata() {
      try {
        let { data: pelicula } = await this.axios(this.$store.state.getPeliculaPrecioBarata)
        this.peliculasMasBaratas = pelicula;
      } catch (error) {
        console.log('error en el getPeliBarata ' + error);
      }
    },

    async getPeliCara() {
      try {
        let { data: pelicula } = await this.axios(this.$store.state.getPeliculaPrecioCara)
        this.peliculasMasCaras = pelicula;
      } catch (error) {
        console.log('error en el getPeliCara ' + error);
      }
    },

    async getPeliLarga() {
      try {
        let { data: pelicula } = await this.axios(this.$store.state.getPeliculaDuracionLarga)
        this.peliculasMasLargas = pelicula;
      } catch (error) {
        console.log('error en el getPeliLarga ' + error);
      }
    },

    async getPeliCorta() {
      try {
        let { data: pelicula } = await this.axios(this.$store.state.getPeliculaDuracionCorta)
        this.peliculasMasCortas = pelicula;
      } catch (error) {
        console.log('error en el getPeliLarga ' + error);
      }
    },


    },
    computed: {

       obtenerTodo(){
       return this.getTodo()
      },
    }
}


</script>

<style scoped lang="css">

section{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}

hr{
  background-color: rgba(240, 248, 255, 0.24);
}
.intro{
  color: antiquewhite;
}
.ocultar{
  color: rgba(0, 0, 0, 0);
}

img{
  width: 150px;
}
h1{
  color: antiquewhite;
}

th:hover{
  transition: all 0.9s;
  color: aliceblue;
  background-color: rgba(255, 255, 255, 0.267);
  
}
#img2{
  width: 100px;
}
#jb1{
  
  background-image: url('https://images.unsplash.com/photo-1668455199701-284281127a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjEyfHxmb25kbyUyMGRlJTIwcGFudGFsbGElMjBtYWN8ZW58MHx8MHx8&auto=format&fit=crop&w=3000&q=60');
  /* background-image: url('https://images.unsplash.com/photo-1650473395449-5ad9037cc318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTc2fHxmb25kbyUyMGRlJTIwcGFudGFsbGElMjBtYWN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60'); */
}

#jb2{
  background-color: rgba(255, 255, 255, 0.034);
  color: antiquewhite;
  margin: 0 auto;
  width: 30rem;
  height: 35rem;
  border-radius: 7px;
}
#jb3:hover{
  transition: all 0.9s;
  color: aliceblue;
  background-color: rgba(255, 255, 255, 0.267);
}
#jb3{
  background-color: rgba(255, 255, 255, 0.034);
  color: aliceblue;
  width: 30rem;
  height: 20rem;
}
</style>
