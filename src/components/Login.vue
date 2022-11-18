<template>
  <div>
    <Carrusel />
    <div v-show="!this.$store.state.estaLogueado">
      <div class="jumbotron">
        <vue-form :state="formState" @submit.prevent="iniciarSesion()">

          <validate tag="div">
            <label for="email">Email</label>
            <input type="email" id="email" class="form-control" autocomplete="off" v-model.trim="formData.email"
              name="email" required />
            <field-messages name="email" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo requerido
              </div>
              <div slot="email" class="alert alert-danger mt-1">
                Email no válido
              </div>
            </field-messages>
          </validate>
          <validate tag="div">
            <label for="password">Contraseña</label>
            <input type="password" id="password" class="form-control" autocomplete="off"
              v-model.trim="formData.password" name="password" required />
            <field-messages name="password" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo requerido
              </div>
            </field-messages>
          </validate>

          <div v-show="$store.state.failUser" class="alert alert-danger mt-1">
            Credenciales incorrectas
          </div>

          <button class="btn btn-outline-dark my-3" :disabled="formState.$invalid">
            Iniciar Sesión
          </button>

        </vue-form>

        <a class="link1" @click="$router.push('/formUsuario')">Registrarse</a><br>

      </div>
    </div>
  </div>
</template>

<script>
import Carrusel from './Carrusel.vue'
export default {
  name: "src-componentes-formulario",
  components: {Carrusel},
  data() {
    return {
      formState: {},
      formData: this.getInitialData(),
      contraseniaMinLength: 6,
      contraseniaMaxLength: 20,
    };
  },
  methods: {
    getInitialData() {
      return {
        email: null,
        password: null,
      };
    },
    async iniciarSesion() {
      const user = { ...this.formData }
      const usuario = await this.validarUsuario(user)
      if(usuario) {
        this.$store.dispatch('loguearse', usuario)
        this.$router.push('/peliculas')
        }
      else this.$store.dispatch('failLogin')
      this.limpiarForm()
    },
    async validarUsuario(user) {
        try {
          let { data : usuario } =  await this.axios.post(this.$store.state.validateUser, user, { 'content-type' : 'application/json' })
          return usuario
        }
        catch(error) { console.error('Error en validarUsuario', error.message) }
    },
    limpiarForm() {
      this.formData = this.getInitialData();
      this.formState._reset();
    },
  },
};
</script>

<style scoped>


.link1{
    animation: none;
    color: rgb(44, 44, 44);
  }

  .link1:hover{
    cursor: pointer;
  }
  
</style>