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
        <p>Precio: $<i>{{ pelicula.precio }}</i></p>
        <button class="btn btn-info" @click="cerrar()">Cerrar</button>
        <button class="btn btn-info ml-2" @click="verFunciones()">Funciones</button>
      </div>
      <div class="media-body ml-2">
        <p>{{pelicula.sinopsis}}</p>
        <div >
          <h5>Fechas:</h5>
          <div class="d-inline" v-for="(f,index) in fechas" :key="index">
            <span class="p-1 m-2 btn bg-light">{{f}}</span>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>

  export default  {
    name: 'src-components-pelicula',
    props: ['pelicula', 'showPeli', 'fechas'],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      cerrar(){
        this.showPeli.forEach(item => item.valor = false);
      },
      verFunciones(id){
        console.log(id)
         this.funciones = true
      },

    },
    
}

</script>

<style scoped lang="css">

</style>
