<template >
  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark d-flex ">
      
      <router-link v-if="($store.state.estaLogueado)" to="/peliculas">
        <a class="navbar-brand" href="#"> 🎬 Cine ORT</a>
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
              <a class="nav-link text-light" href="#">Administrar Peliculas</a>
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
                <p class="text-right text-warning pt-3 text-uppercase " >  {{ mostrarTipoDePerfil }}</p>
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
  li a:hover{
    color: rgb(243, 220, 12) !important;
    text-decoration: none;
  }

</style>
