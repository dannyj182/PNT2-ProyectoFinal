<template >
  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark d-flex ">
      
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
             <router-link to="/login" >
              <a class="nav-link text-light" href="#">Login</a>
             </router-link>
          </li>
        </ul>
        <ul class="navbar-nav text-center " v-else>
          <li class="nav-item ">
            <router-link to="/peliculas" >
              <a class="nav-link text-light" href="#">Peliculas </a>
             </router-link>
          </li>
          <li class="nav-item ">
              <a class="nav-link " href="#" @click=logout() >LogOut</a>
          </li>

          <li class="nav-item">
            <router-link to="/ticket" >
              <a class="nav-link text-light" href="#">Tickets</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/compra" >
              <a class="nav-link text-light" href="#">Comprar</a>
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
       this.$store.dispatch('desloguearse')
       this.$router.push('/')
    }
  },
  computed: {},
};
</script>

<style scoped lang="css">

</style>
