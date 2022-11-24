<template >
  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark d-flex ">
      <router-link v-if="($store.state.estaLogueado)" to="/peliculas">
        <a class="pt-1 navbar-brand" href="#"> 🎬 Cine ORT</a>
      </router-link>
      <router-link v-else to="/">
        <a class="navbar-brand" href="#"> 🎬 Cine ORT</a>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav text-center " v-if="!($store.state.estaLogueado)">
          <li class="nav-item ">
            <router-link to="/login">
              <a class="nav-link text-light" href="#">Login</a>
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav text-center " v-else-if="!($store.state.esAdmin)">
          <li class="nav-item">
            <router-link to="/peliculas">
              <a class="nav-link text-light" href="#">Peliculas </a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/ticket">
              <a class="nav-link text-light" href="#">Tickets</a>
            </router-link>
          </li>
      
          <li class="nav-item ">
            <a class="nav-link " href="#" @click=desloguearse()>LogOut</a>
          </li>

          <!-- <li  class="nav-item ">
            <a class="nav-link" >Perfil Usuario </a>
          </li> -->
      
        </ul>

        <ul class="navbar-nav text-center " v-else>
          <li class="nav-item">
            <router-link to="/peliculas">
              <a class="nav-link text-light" href="#">Peliculas </a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/ticket">
              <a class="nav-link text-light" href="#">Tickets</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/abmPelicula">
              <a class="nav-link text-light" href="#">Configuraciones</a>
            </router-link>
          </li>
      
          <li class="nav-item ">
            <a class="nav-link " href="#" @click=desloguearse()>LogOut</a>
          </li>

          <!-- <li  class="nav-item ">
            <a class="nav-link" >Perfil Administrador </a>
          </li> -->

        </ul>

        </div>
                <p class="perfil mt-3" >  {{ mostrarTipoDePerfil }} </p>
                <div v-if="this.$store.state.esAdmin">
                  <img @click="irPerfil()" src="https://cdn2.iconfinder.com/data/icons/industry-flat-4/340/wrench_gear_repair_mechanic_industry_wheel_machine_fix-45.png" alt="admin">
                </div>
                <div v-else-if="this.$store.state.estaLogueado">
                  <img @click="irPerfil()" src="https://cdn3.iconfinder.com/data/icons/leto-space/64/__astronaut_space_suit-40.png" alt=""> 
                </div>
                <div v-else>
                  <img @click="irForm()" src="https://cdn3.iconfinder.com/data/icons/leto-user-group/64/__acount_profile-40.png" alt=""> 
                </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: "src-componentes-navbar",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {

  },
  computed: {},
};
</script>

<style scoped lang="css">

section{
  font-family: Verdana, Geneva, Tahoma, sans-serif
}

  li a:hover{
    transition: all 0.5s;
    /* color: rgb(243, 220, 12) !important; */
    color: rgb(0, 0, 0)!important;
    text-decoration: none;
  }

  .perfil{
    color: antiquewhite;
    padding-right: 0.5rem;
    font-size: medium;
  }

  img{
    cursor: pointer;
  }

</style>
