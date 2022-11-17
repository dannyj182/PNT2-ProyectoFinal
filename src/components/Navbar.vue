<template >
  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark d-flex flex-row-reverse  ">
      
       <router-link to="/">
        <a class="navbar-brand" href="#"> 🎬 Cine ORT</a>
       </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav" >
        <ul class="navbar-nav text-center " v-if="!($store.state.estaLogueado)">
          <li class="nav-item ">
             <router-link to="/formulario" >
              <a class="nav-link text-light" href="#">Login</a>
             </router-link>
          </li>
        </ul>
        <ul class="navbar-nav text-center d-flex" v-else>
          <li class="nav-item ">
            <router-link to="/peliculas" >
              <a class="nav-link text-light" href="#">Peliculas </a>
             </router-link>
          </li>
          <li class="nav-item ">
              <a class="nav-link text-light" href="#" @click=logout() >LogOut</a>
          </li>
          <li class="nav-item ">
             <router-link to="/formulario" >
              <a class="nav-link" href="#"><i class="bi bi-person-circle"></i></a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/ticket" >
              <a class="nav-link" href="#"><i class="bi bi-person-circle"></i>Tickets</a>
            </router-link>
          </li>
          
        </ul>
        
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
    logout(){
      console.log("hola")
       this.$store.dispatch('desloguearse')
    }
  },
  computed: {},
};
</script>

<style scoped lang="css">

</style>
