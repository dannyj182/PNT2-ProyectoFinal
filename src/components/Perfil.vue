<template >
  <section>
  
    <div id="jb1" class="jumbotron">
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
      <a class="link2" @click="desloguearse()">Cerrar sesion</a> <hr>


      <button @click="mostrar()" class="btn btn-outline-danger my-3">{{mensaje}}</button>
      <div v-show="estaMostrando">
        <div align="center" id="jb2" class="jumbotron">
          <vue-form :state="formState" @submit.prevent="editar()">
      
      
      
            <validate tag="div">
      
              <label for="nombre">Nombre</label>
              <input type="text" id="nombre" class="form-control" autocomplete="off" v-model.trim="formData.nombre"
                name="nombre" required :minlength="nombreMinLength" :maxlength="nombreMaxLength" no-espacios
                placeholder="Ingrese su Nombre">
      
      
              <field-messages name="nombre" show="$dirty">
                <div slot="required" class="alert alert-danger mt-1">Campo Nombre requerido</div>
                <div slot="minlength" class="alert alert-warning mt-1">Este campo debe poseer al menos {{ nombreMinLength }}
                  caracteres.</div>
                <div slot="no-espacios" class="alert alert-danger mt-1">El campo no permite espacios intermedios.</div>
              </field-messages>
            </validate><br>
      
      
            <validate tag="div">
      
              <label for="edad">Edad</label>
              <input type="number" id="edad" class="form-control" autocomplete="off" v-model.trim="formData.edad" name="edad"
                required placeholder="Ingrese su edad">
              <field-messages name="edad" show="$dirty">
                <div class="font">Edad Confirmada</div>
                <div slot="required" class="alert alert-danger mt-1">Campo edad requerido</div>
                <div slot="no-espacios" class="alert alert-danger mt-1">El campo no permite espacios intermedios.</div>
              </field-messages>
      
            </validate><br>
      
      
            <validate tag="div">
        <label for="email">Email</label>
        <input type="email" id="email" class="form-control" autocomplete="off" v-model.trim="formData.email" name="email"
          required placeholder="Ingrese el Email" />
        <field-messages name="email" show="$dirty">
          <div slot="required" class="alert alert-danger mt-3 w-25 mx-5">
            Campo requerido
          </div>
          <div slot="email" class="alert alert-danger mt-3 w-25 mx-5">
            Email no válido
          </div>
        </field-messages>
      </validate><br>
  
  
      <validate tag="div">
        <label for="password">Contraseña</label>
        <input type="password" id="password" class="form-control" autocomplete="off" v-model.trim="formData.password"
          name="password" required placeholder="Ingrese la Constraseña" />
        <field-messages name="password" show="$dirty">
          <div slot="required" class="alert alert-danger mt-3 w-25 mx-5">
            Campo requerido
          </div>
        </field-messages>
      </validate>
      
      <hr>
  
      <button id="btn" class="btn btn-outline-danger my-3" :disabled="formState.$invalid">
        Editar
      </button><br>
      <hr>
  
    </vue-form>
        </div>
      </div>

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
        formState: {},
        formData: this.getInitialData(),
        user: this.$store.state.usuarioActual,
        mensaje: 'Editar Perfil',
        estaMostrando: false,
        usuario: null,
        nombreMinLength:3,
        nombreMaxLength:12,
      }
    },
    methods: {
      getInitialData() {
      return {
        email: null,
        password: null,
      }
    },

      mostrar(){
      !this.estaMostrando ? this.mensaje = 'Ocultar' : this.mensaje = 'Editar Perfil'
      this.estaMostrando = !this.estaMostrando
      this.formData = this.getInitialData();
      // this.crear = true;
    },

      async editar() {

        let data = { ...this.formData }
        let newUser = {
          "_id": this.$store.state.idUser,
          "nombre": data.nombre,
          "edad": data.edad,
          "email": data.email,
          "password": data.password,
        }

        let { data: usuario } = await this.axios.put(this.$store.state.updateUsuario, newUser, { 'content-type': 'application/json' })
        this.usuario = usuario

        if (usuario != null) { alert('Se Edito correctamente', this.$router.push('/peliculas')) }else{
          alert('no se pudo editar')
        }
      }

    }


}
</script>

<style scoped lang="css">

#jb1{
  background-image: url('https://images.unsplash.com/photo-1668455199701-284281127a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjEyfHxmb25kbyUyMGRlJTIwcGFudGFsbGElMjBtYWN8ZW58MHx8MHx8&auto=format&fit=crop&w=3000&q=60');
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

  input{
    height: 2rem;
    width: 50rem;
    background-color: black;
  }

  #jb2{
    background-color: #030303c2; 
    color: rgb(255, 255, 255);
  }
</style>
