<template >
<section>

<div>
    <table class="tabla">
    
      <tr class="fila">
        <th class="columna" @click="irAdmPelis()">
          <a class="link" >Administrar Pelicula</a>
        </th>
        <th class="columna" @click="irEstadistica()">
          <a class="link" >Ver estadistica</a>
        </th>
        <th class="columna" id="pf" @click=irPerfil()>
          <a class="link" >Ir a Perfil</a><br><br>
        </th>
      </tr>
    </table>
    </div>




</section>  

</template>

<script >
  export default  {
    name: 'src-components-configuraciones',
 
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
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}


  .tabla {
    margin: 0 auto;
    width: 900px;
    border-collapse: collapse;
    border-radius: 2px;
    /* background-color: rgba(255, 255, 255, 0.055); */

}

th {
    font-size: large;
    color: rgba(255, 255, 255, 0.74);
    padding: 1px;
    text-align: center;
}

.columna:hover {
    transition: all 1.2s ease;
    background-color: rgba(0, 0, 0, 0.568);
    cursor: pointer;
}

.jumbotron{
  background-color: black;
}

.link {
    color: antiquewhite;
    text-decoration: none;
    /*  color: rgba(255, 255, 255, 0.829); */
}

.link:hover {
    transition: 0.8s ease;
    color: white;
    /* color: #8a0c0c;  */
}

section{
    background-color: #343a40; 
   /* #212529e7; */
   /* background-image: url('https://images.unsplash.com/photo-1542931415-162aeab4418f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=60'); */
  
}

#pf{
  padding-top: 1.5rem; 
}



</style>
