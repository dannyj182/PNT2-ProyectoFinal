<template>
  <section>
    <Carrusel/>
    <div class="jumbotron">
      <h2>Peliculas</h2>
      <div v-show="showPeli[0].valor">
        <Pelicula :pelicula="pelicula" :showPeli="showPeli"/>
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
      }
    },
    methods: {
      mostrarPeli(pShow){
        this.showPeli[0].valor = true
        this.pelicula = pShow
      }
    },
    computed: {
      
    },
    mounted () {
      
    },
  }
</script>

<style scoped lang="css">
  img:hover{ 
     border: 4px solid rgba(17, 14, 19, 0.26);
    -webkit-transform: scale(1
    1);
    transform: scale(1.1);
    cursor: pointer;
    padding:0.2rem;
  }

</style>
