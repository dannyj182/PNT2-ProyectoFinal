<template>
<section>
  <div align="center" id="peli">
      <div id="jb1" class="jumbotron">

        <img :src="pelicula.imagen" :alt="pelicula.nombre" :style="{ 'border-radius' : '10px' }"><br><br>
        <p>Nombre: <b>{{ pelicula.nombre }}</b></p>
        <p>Género: <i>{{ pelicula.genero }}</i></p>
        <p>Director: {{ pelicula.director }}</p>
        <p>Duración: <i><u>{{ pelicula.duracion }}min</u></i></p>
        <p>Clasificación: {{ pelicula.clasificacion }}</p>
        <p>Precio: $<i>{{ pelicula.precio }}</i></p>


        <div id="jb2" class="jumbotron">
        <p>{{pelicula.sinopsis}}</p>
        <div >
          <h5>Fecha:</h5>
          <div id="fecha" class="d-inline" >
            <span class="p-1 m-2 btn bg-dark text-light">{{fechas}}</span>
          </div>
        </div>

      </div>

        <button class="btn btn-info" @click="cerrar()">Cerrar</button>
      </div>
     
    
  </div>
</section>
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

    },
    
}

</script>

<style scoped lang="css">

section{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}

#jb1{
  color: antiquewhite;
  background-color: rgba(0, 0, 0, 0.76)}

#jb2{
  color: black;
  background-color: rgba(240, 248, 255, 0.897);
}



</style>
