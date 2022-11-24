<template >
  <section align="center" class="ticket">
    <div class="jumbotron">
      <hr>
      <hr>    
      <div>
        <h2 class="fondo1">{{"Resumen de Entradas" | pasarAMayusucula}}</h2><br>
        <a class="link1" @click=volverPeliculas()>volver a peliculas</a><br><br>
        <a class="link2" @click="desloguearse()">Inicio</a>  
      </div>
    <hr>
      <hr>
      <apiTicket />
    </div>
  </section>
</template>

<script>

import apiTicket from './apiTicket.vue'

  export default  {
    name: 'src-components-ticket',
    components: {
    
    apiTicket
    },
    props: [],
    mounted () {

    },
    data () {
      return {
       
      }
    },
    methods: {

    },
    computed: {

    }
}

</script>

<style scoped lang="css">

section{
  font-family: Verdana, Geneva, Tahoma, sans-serif
}


  h2{
    /* background-color: rgba(97, 76, 8, 0.849); */
    color: antiquewhite;
    text-align: center;
  }
  hr{
    background-color: rgba(97, 76, 8, 0.849);
    padding-block: 0.7px;
  }
  .jumbotron{
    background-color: rgb(32, 32, 32);
  }
  .link1{
    animation: none;
    color: antiquewhite;
  }

  .link1:hover{
    cursor: pointer;
  }
  .link2{
    animation: none;
    color: antiquewhite;
    cursor: pointer;
  }
  .fondo1{
    background-color: black;
  }
</style>
