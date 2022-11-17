<template>

  <div class="jumbotron">

    <vue-form :state="formState" @submit.prevent="iniciarSesion()">

      <validate tag="div">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.email"
          name="email"
          required
        />
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
        <label for="contrasenia">Contraseña</label>
        <input
          type="password"
          id="contrasenia"
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.contrasenia"
          name="contrasenia"
          required
          :minlength="contraseniaMinLength"
          :maxlength="contraseniaMaxLength"
        />
        <field-messages name="contrasenia" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">
            Campo necesario
          </div>
          <div slot="minlength" class="alert alert-danger mt-1">
            Este campo debe poseer al menos {{ contraseniaMinLength }} caracteres.
          </div>
          <div slot="contrasenia-max-length" class="alert alert-danger mt-1">
            Este campo debe poseer máximo {{ contraseniaMaxLength }} caracteres.
          </div>
        </field-messages>
      </validate>

      <button class="btn btn-outline-dark my-3" :disabled="formState.$invalid">
        Iniciar Sesión
      </button>

    </vue-form>

  </div>

</template>

<script>
export default {
  name: "src-componentes-formulario",
  components: {},
  data() {
    return {
      formState: {},
      formData: this.getInitialData(),
      contraseniaMinLength: 8,
      contraseniaMaxLength: 20,
    };
  },
  methods: {
    getInitialData() {
      return {
        email: null,
        contrasenia: null,
      };
    },
    iniciarSesion() {
      let usuario = { ...this.formData };
      console.log(usuario);
      this.formData = this.getInitialData();
      this.formState._reset();
    },
  },
};
</script>

<style scoped>
</style>