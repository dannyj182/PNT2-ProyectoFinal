<template>
  <section>
    <Carrusel/>
    <div class="jumbotron">
      <h2>Peliculas</h2>
      <div v-show="showPeli[0].valor">
        <Pelicula :pelicula="pelicula" :showPeli="showPeli" :fechas="fechas"/>
      </div>
      <br>
      <div class="d-inline" v-for="(pelicula,index) in $store.state.peliculas" :key="index">
        <div class="d-inline" @click="mostrarPeli(pelicula)">
          <img :src="pelicula.imagen" class="m-3" :alt="pelicula.nombre" :style="{ 'border-radius' : '10px' }">
        </div>
      </div>
    </div>
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
        let funcionesPorFecha = funciones.map(f => f.fecha)
        this.fechas = funcionesPorFecha;
      }
      catch (error) { console.error('Error en postUsuario', error.message) }
    },

    },
    computed: {
      
    },
    mounted () {
      
    },
  }
</script>

<style scoped lang="css">
  img:hover{ 
     outline: 3px solid rgba(236, 194, 7, 0.959);
    transform: scale(1.04);
    cursor: pointer;
  }

</style>
