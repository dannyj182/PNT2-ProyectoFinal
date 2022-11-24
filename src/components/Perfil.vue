<template >
  <section>
  
    <div class="jumbotron">
      <h1>Bienvenido/a {{ user.nombre }} </h1>
      <table align="center">
        <th>
         <img src="https://cdn1.iconfinder.com/data/icons/metaversy-metaverse-3d-object/256/13._Metaverse_Touch.png" alt="">
         <p>Nro: {{user._id}}</p>
        <p>Edad: {{ user.edad }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Dni: {{ user.dni }}</p>
        <p>Password: {{ user.password }}</p>
      </th>
      
      <th>
          <img id="img2"  :src="user.peliculas.imagen">
          <p>Ultima pelicula vista</p>
      </th>
      </table>
      <a class="link2" @click="desloguearse()">Cerrar sesion</a>  
    </div>
    
  </section>

</template>

<script>
  export default  {
    name: 'src-components-perfil',
    components: {
  },
    props: [],
    mounted () {

    },
    data () {
      return {
        user: this.$store.state.usuarioActual,
       
      }
    },
    methods: {

    },
    computed: {

    }
}
// lpk900@gmail.com
// 111111

</script>

<style scoped lang="css">

.jumbotron{
  background-image: url('https://images.unsplash.com/photo-1668455199701-284281127a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjEyfHxmb25kbyUyMGRlJTIwcGFudGFsbGElMjBtYWN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60');
}

h1{
  color: antiquewhite;
}

th{
  font-size: small;
  text-align: center;
  color: antiquewhite;
  padding-left: 4rem;
  
}
  section{
  font-family: Verdana, Geneva, Tahoma, sans-serif
}

img{
  width: 150px;
}

#img2{
  width: 20rem;
}

.link2{
    animation: none;
    color: antiquewhite;
    cursor: pointer;
  }
</style>
