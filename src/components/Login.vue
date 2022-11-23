<template>
  <div>
    <Carrusel /><br>
    <div v-show="!this.$store.state.estaLogueado">
      <div class="jumbotron" :style="{'background-image': asignarImg}">
        <vue-form :state="formState" @submit.prevent="iniciarSesion()">

          <validate tag="div">
            <label for="email">Email</label>
            <input type="email" id="email" class="form-control" autocomplete="off" v-model.trim="formData.email"
              name="email" required placeholder="Ingrese el Email" />
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
              v-model.trim="formData.password" name="password" required placeholder="Ingrese la Constraseña" />
            <field-messages name="password" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo requerido
              </div>
            </field-messages>
          </validate>

          <div v-show="$store.state.failUser" class="alert alert-danger mt-1">
            Credenciales incorrectas
          </div>

          <button id="btn" class="btn btn-outline-dark my-3" :disabled="formState.$invalid">
            Iniciar Sesión
          </button><br><hr>

        </vue-form>

        <a class="link1" @click="$router.push('/formUsuario')">Registrarse</a><img class="foto" src="https://cdn3.iconfinder.com/data/icons/leto-space/64/__astronaut_space_suit-512.png" @click="$router.push('/formUsuario') ">

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
      im0: 'url(https://images.unsplash.com/photo-1546180147-af9074ff24aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzAxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=3000&q=60)',
      im1: 'url(https://images.unsplash.com/photo-1666264800257-3aedd3c559f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=60)',
      im2: 'url(https://images.unsplash.com/photo-1545294477-c0a0b8033797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjYzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60)',
      im3: 'url(https://images.unsplash.com/photo-1546527706-59aa9718a426?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjgxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=3000&q=60)',
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
          usuario.isAdmin? this.loguearseAdm(usuario) : this.loguearse(usuario)  // con mixin
        alert('Bienvenido/a  ' + usuario.nombre)
        // this.$router.push('/peliculas')
        this.volverPeliculas()
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


    getRandom(){
      // agregar mas 
     return Math.floor(Math.random() * 20);
    }
  },

  computed:{
    asignarImg()
    {
      let numero = this.getRandom()
      if(numero>10){
        return this.im3;
      }else if(numero>5){
        return this.im2;
      }else if(numero>3){
        return this.im0;
      }
      else{
        return this.im1;
      }

    },
  }
};
</script>

<style scoped>

#btn{
  background-color: antiquewhite;
}

#btn:hover{
  transition: all 0.3s;
  color: crimson;
}
.link1{
    animation: none;
    color: antiquewhite;
  }

  .link1:hover{
    cursor: pointer;
  }
  
  .jumbotron
  {
    color: antiquewhite;
  }

  .foto{
    width: 50px;
  }


  .foto:hover{
    transition: all 0.3s;
    cursor: pointer;
    width: 60px;
  }

  .form-control{
  /* margin-top: 12px;
    border: auto;
    background-color: #131212;
    color: rgb(167, 164, 164);
    border-collapse: collapse;
    border-radius: 7px;
    opacity: 0.7;
    width: 400px; */
    width: 500px;
    background-color: rgba(1, 49, 77, 0);
    color: antiquewhite;
}

.form-control:hover {
  transition: all 0.5s ease;
  box-shadow: 1px 1px 7px rgb(255, 255, 255);
}


</style>