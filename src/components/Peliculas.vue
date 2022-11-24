<template>
  <section>
    <Carrusel/><hr>
    <div id="jb1" align="center" class="jumbotron">
      <h2>{{"Películas" | pasarAMayusucula}}</h2>
      <div v-show="showPeli[0].valor">
        <Pelicula :pelicula="pelicula" :showPeli="showPeli" :fechas="fechas" />
        
        <button id="comprar" class="btn btn-danger ml-2" @click="comprar(pelicula)">Comprar</button><img class="logo" @click="comprar(pelicula)" src="https://cdn1.iconfinder.com/data/icons/bootstrap/16/cart2-40.png" alt="">
      
      </div>
      <br>
      <div align="center" id="jb2" class="jumbotron">
        <div class="d-inline" v-for="(pelicula, index) in $store.state.peliculas" :key="index">
          <div class="d-inline" @click="mostrarPeli(pelicula)">
            <img :src="pelicula.imagen" class="m-3" :alt="pelicula.nombre" :style="{ 'border-radius': '10px' }">
          </div>
        </div>
      </div>
      </div>
      <hr>
  </section>
</template>

<script>
  import Pelicula from './Pelicula.vue'
  import Carrusel from './Carrusel.vue'

  export default  {
    name: 'src-componentes-peliculas',
    components: {
      Pelicula,
      Carrusel
    },
    props: [],
    data () {
      return {
        showPeli: [{valor: false}],
        pelicula: {},
        fechas: [],
        pelisCompras: [],
      }
    },
    methods: {
      mostrarPeli(pShow){
        this.showPeli[0].valor = true
        this.pelicula = pShow
        this.getFunciones(this.pelicula._id)
      },

        async getFunciones(id) {
        try {
        let { data: funciones } = await this.axios.get(`${this.$store.state.getFunciones}/${id}`, { 'content-type': 'application/json' })
        console.log(funciones)
        this.fechas = funciones.fecha;
      }
      catch (error) { console.error('Error en postUsuario', error.message) }
      },

     async comprar(pelicula) {

        try {

          const compra = {
            "_id": this.$store.state.idUser,
            "peliculas": {
              "_id":pelicula._id,
              "nombre": pelicula.nombre,
              "genero": pelicula.genero,
              "director": pelicula.director,
              "duracion": pelicula.duracion,
              "clasificacion": pelicula.clasificacion,
              "imagen": pelicula.imagen,
              "sinopsis": pelicula.sinopsis,
              "precio":pelicula.precio
            }
          }


          let { data : peliculas } = await this.axios.put(this.$store.state.updateComprarPeli, compra, { 'content-type' : 'application/json' })
          this.pelisCompras = peliculas
          alert('Pelicula comprada nro: ' + pelicula._id)
          if(peliculas!=null){
            this.$router.push('/ticket')
          }
          
        } catch (error) {
          console.log('error en el comprar ' + error);
        }
      },



    },
    computed: {
      
    },
    mounted () {
      
    },
  }
</script>

<style scoped lang="css">

section{
  font-family: Verdana, Geneva, Tahoma, sans-serif
}


  img:hover{ 
    transition: all 0.4s;
     /* outline: 3px solid rgba(236, 194, 7, 0.959); */
     box-shadow: 2px 4px 10px rgb(147, 248, 255);
    transform: scale(1.04);
    cursor: pointer;
  }


#jb1{
  /* background-color: rgba(44, 29, 48, 0.918); */
  background-image: url('https://images.unsplash.com/photo-1542931415-162aeab4418f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=60');
}

#jb2{
  background-color: rgba(0, 0, 0, 0.87)

}


h2{
  color: antiquewhite;
}




</style>
