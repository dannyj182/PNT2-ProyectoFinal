<template >
  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark d-flex flex-row-reverse  ">
      
       <router-link to="/">
        <a class="navbar-brand" href="#"> 🎬 Ciner ORT</a>
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
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav text-center">
          <li class="nav-item active">
            <router-link to="/peliculas">
              <a class="nav-link text-light" href="#"
                >Peliculas </a
              >
            </router-link>
          </li>
          <li class="nav-item">
             <router-link to="/formulario" v-if="!($store.state.estaLogueado)">
              <a class="nav-link text-light" href="#">Login</a>
             </router-link>

              <router-link to="/peliculas" v-else >
              <a class="nav-link text-light" href="#">LogOut</a>
             </router-link>

          </li>
           <li class="nav-item">
            <router-link to="/formulario" v-if="($store.state.estaLogueado)">
              <a class="nav-link" href="#"><i class="bi bi-person-circle"></i></a>
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
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
.src-componentes-navbar {
}
</style>
