<template>

  <div>
    <div class="media alert alert-info">
      <img :src="pelicula.imagen" :alt="pelicula.nombre" :style="{ 'border-radius' : '10px' }">
      <div class="media-body ml-2">
        <p>Nombre: <b>{{ pelicula.nombre }}</b></p>
        <p>Género: <i>{{ pelicula.genero }}</i></p>
        <p>Director: {{ pelicula.director }}</p>
        <p>Duración: <i><u>{{ pelicula.duracion }}</u></i></p>
        <p>Clasificación: {{ pelicula.clasificacion }}</p>
        <p>Precio: {{ pelicula.precio }}</p>
        <button class="btn btn-warning" @click="cerrar()">Cerrar</button>
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
        close: false
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
