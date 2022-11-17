<template>

  <div>
    <div class="media alert alert-danger">
      <img :src="pelicula.imagen" :alt="pelicula.nombre" :style="{ 'border-radius' : '10px' }">
      <div class="media-body ml-2">
        <p>Nombre: <b>{{ pelicula.nombre }}</b></p>
        <p>Género: <i>{{ pelicula.genero }}</i></p>
        <p>Director: {{ pelicula.director }}</p>
        <p>Duración: <i><u>{{ pelicula.duracion }}min</u></i></p>
        <p>Clasificación: {{ pelicula.clasificacion }}</p>
        <p>Precio: {{ pelicula.precio }}</p>
        <button class="btn btn-warning" @click="cerrar()">Cerrar</button>
      </div>
      <div class="media-body ml-2">
        <p>{{pelicula.sinopsis}}</p>
      </div>
    </div>
  </div>

</template>

<script>

  export default  {
    name: 'src-components-pelicula',
    props: ['pelicula', 'showPeli'],
    mounted () {

    },
    data () {
      return {
        
      }
    },
    methods: {
      cerrar(){
        this.showPeli.forEach(item => item.valor = false);
      }
    },
    computed: {

    }
}

</script>

<style scoped lang="css">

</style>
