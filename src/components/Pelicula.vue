<template>

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
          <h5>Fechas:</h5>
          <div id="fecha" class="d-inline" v-for="(f,index) in fechas" :key="index">
            <span class="p-1 m-2 btn bg-light">{{f}}</span>
          </div>
        </div>

      </div>


        <button class="btn btn-info" @click="cerrar()">Cerrar</button>
        <button class="btn btn-info ml-2" @click="verFunciones()">Funciones</button>
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



#jb1{
  color: antiquewhite;
  background-color: rgba(0, 0, 0, 0.76)}

#jb2{
  color: black;
  background-color: rgba(240, 248, 255, 0.897);
}

#fecha{
  border-radius: 1px;
  background-color: rgb(51, 51, 51);
  padding-top: 1rem;
  padding-bottom: 1rem;
}

</style>
