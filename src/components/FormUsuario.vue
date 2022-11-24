<template>

     <div class="jumbotron">

      <div align="center" id="jumbotron2" class="jumbotron">
        <img src="https://cdn0.iconfinder.com/data/icons/people-and-lifestyle/64/account-people-man-user-150.png">
        <h1>Nuevo Usuario </h1>
        <hr><br>
        <div id="jumbotron3" class="jumbotron">

          <vue-form :state="formState" @submit.prevent="enviar()">

            <validate tag="div">

              <label for="nombre">Nombre</label>
              <input type="text" id="nombre" class="form-control" autocomplete="off" v-model.trim="formData.nombre"
                name="nombre" required :minlength="nombreMinLength" :maxlength="nombreMaxLength" no-espacios>


              <field-messages name="nombre" show="$dirty">
                <div slot="required" class="alert alert-danger mt-1">Campo Nombre requerido</div>
                <div slot="minlength" class="alert alert-warning mt-1">Este campo debe poseer al menos {{ nombreMinLength }} caracteres.</div>
                <div slot="no-espacios" class="alert alert-danger mt-1">El campo no permite espacios intermedios.</div>
              </field-messages>
            </validate><br>
            <hr>


            <validate tag="div">
              <label for="dni">DNI</label>
              <input type="number" id="dni" class="form-control" autocomplete="off" v-model.number="formData.dni" name="dni" required>

              <field-messages name="dni" show="$dirty">
                <div class="font">Dni confirmado</div>
                <div slot="required" class="alert alert-danger mt-1">Campo dni requerido</div>
                <div slot="no-espacios" class="alert alert-danger mt-1">El campo no permite espacios intermedios.</div>
              </field-messages>

            </validate><br>
            <hr>

            <validate tag="div">

              <label for="edad">Edad</label>
              <input type="number" id="edad" class="form-control" autocomplete="off" v-model.trim="formData.edad" name="edad" required>
              <field-messages name="edad" show="$dirty">
                <div class="font">Acceso concedido</div>
                <div slot="required" class="alert alert-danger mt-1">Campo edad requerido</div>
                <div slot="no-espacios" class="alert alert-danger mt-1">El campo no permite espacios intermedios.</div>
              </field-messages>

            </validate><br><hr>

            <validate tag="div">
          <label for="email">Email</label>
          <input type="email" id="email" class="form-control" autocomplete="off" v-model.trim="formData.email" name="email" required>

          <field-messages name="email" show="$dirty">
            <div class="font">Acceso concedido</div>
            <div slot="required" class="alert alert-danger mt-1">Campo email requerido</div>
            <div slot="no-espacios" class="alert alert-danger mt-1">El campo no permite espacios intermedios.</div>
          </field-messages>

          </validate><br>
<hr>

          <validate tag="div">

            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" autocomplete="off" v-model.trim="formData.password" name="password" required>

            <field-messages name="password" show="$dirty">
              <div class="font">Acceso concedido</div>
              <div slot="no-espacios" class="alert alert-danger mt-1">El campo no permite espacios intermedios.</div>
            </field-messages>

          </validate><br>

            <button class="btn btn-info my-3" :disabled="formState.$invalid">Enviar</button><br><br>
            <a class="link1" href="/"> Volver a inicio</a>
          </vue-form>
        </div>
      </div>


    </div> 


</template>

<script>


  export default  {
    name: 'src-components-form-usuario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState: {},
      formData: this.getInitialData(),
      dniMin:8,
      dniMax:9,
      nombreMinLength:3,
      nombreMaxLength:12,
      contraseniaMinLength: 6,
      contraseniaMaxLength: 20,
      usuarios:[],
      }
    },
    methods: {

      getInitialData() {
      return {
        nombre:null,
        dni: null,
        edad: null,
        email: null,
        password: null,
      };
    },

      async enviar() {

        try {
          let newUser = { ...this.formData }
          let { data: usuarios } = await this.axios.post(this.$store.state.postUsuarios, newUser, { 'content-type': 'application/json' })
          this.usuarios.push(usuarios)
          alert('Bienvenido/a  a Cine ORT ' + this.formData.nombre)
          this.formData = this.getInitialData()
          this.formState._reset()
          this.$store.dispatch('loguearse', usuarios)
          this.$router.push('/peliculas')
        }
        catch (error) {
          console.error('Error en postUsuario', error.message)
        }

      },

    },
    computed: {

    }
}


</script>

<style scoped lang="css">


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
    margin: 0 auto;
    background-color: rgba(10, 20, 26, 0.336);
    color: antiquewhite;

}


h1{
  color: antiquewhite;
}
  #jumbotron3 {
  text-align: center;
  /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
  font-size: 1.3rem;
  background-color: rgba(0, 0, 0, 0.842);
  border-radius: 5px;
}

hr {
  color: antiquewhite;
}

#jumbotron2 {
  color: antiquewhite;
  /* background-color: rgb(1, 49, 77); */
  /* background-image: url('https://images.unsplash.com/photo-1542707661-28405ee527e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80'); */
  background-image: url('https://images.unsplash.com/photo-1542931415-162aeab4418f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=60');
}

td {
  color: antiquewhite;
  font-size: large;
  text-align: center;
  background-color: rgb(68, 6, 6);
  padding-bottom: 1.8rem;
}

th {
  text-align: center;
}

.link1{
    animation: none;
    color: rgba(220, 20, 60, 0.623)
  }

  .link1:hover{
    transition: all 0.8s;
    color: rgb(220, 20, 60)
  }

</style>
