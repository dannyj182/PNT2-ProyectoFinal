<template>

  <section class="src-components-compra">
    <h1>Comprar Pelicula</h1>
    <!-- <Carrusel /> -->
<div class="jumbotron">


  <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Peliculas</label>
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected>Eliga una pelicula...</option>
    <option v-for="(pelicula, index) in $store.state.peliculas" :key="index"> {{ pelicula.nombre }} ${{ pelicula.precio }}
      
    </option>
  </select>
  <button type="submit" class="btn btn-danger my-1" @click="comprar">Comprar</button>

    </div>
  </section>

</template>

<script >
//import Carrusel from './Carrusel.vue'

  export default  {
  components: {  },
    name: 'src-components-compras',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState: {},
      formData: this.getInitialData(),
      }
    },
    methods: {


      comprar(){

        this.seleccion;
      },



      getInitialData() {
      return {
        seleccion: null,
      peliculas: null,
      }
    },

    // async putPelicula() {

    //   try {
    //     let pelicula = { ...this.formData }
    //     let { data : res } = await this.axios.put(this.$store.state.updateComprarPeli + this.$store.state.idUser, pelicula, { 'content-type' : 'application/json' })
    //     if(res.modifiedCount) this.$store.dispatch('updatePelicula', { ...this.formData })
    //      this.formData = this.getInitialData()
    //       this.formState._reset()
    //   }
    //   catch(error) { console.error('Error en editarPelicula', error.message) }        
    // }



  },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-compra {

  }

  .jumbotron{
    background-color: rgba(44, 29, 48, 0.918);
    color: antiquewhite;
  }
</style>
