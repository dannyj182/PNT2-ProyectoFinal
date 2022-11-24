<template>
  <section>
<Configuraciones/>
  <div id="jb1" class="jumbotron">
    
  <h2 v-if="crear">{{'agregar Nueva Pelicula' | pasarAMayusucula}}</h2>
  <h2 v-else>{{'editar Pelicula' | pasarAMayusucula}}</h2>
    <hr />

    <table class="tablaPeli">
      <th>
        <div align="center" id="jb2" class="jumbotron">

<vue-form :state="formState"  @submit.prevent="putPostPelicula(peliId) ">

  <validate tag="div">
    <label for="nombre">Nombre</label><br>
    <input type="text" id="nombre" class="caja"  autocomplete="off" v-model.trim="formData.nombre"
      name="nombre" required :minlength="nombreMinLength" nombre-max-length />

    <field-messages name="nombre" show="$dirty">
      <div slot="required" class="alert alert-danger mt-1">
        Campo requerido
      </div>
      <div slot="minlength" class="alert alert-danger mt-1">
        Este campo debe poseer al menos {{ nombreMinLength }} caracteres.
      </div>
      <div slot="nombre-max-length" class="alert alert-danger mt-1">
        Este campo debe poseer máximo {{ nombreMaxLength }} caracteres.
      </div>
    </field-messages>
  </validate>

  <br />

  <validate tag="div">
    <label for="genero">Género</label><br>
    <input type="text" id="genero" class="caja"  autocomplete="off" v-model.trim="formData.genero"
      name="genero" required :minlength="generoMinLength" genero-max-length />

    <field-messages name="genero" show="$dirty">
      <div slot="required" class="alert alert-danger mt-1">
        Campo requerido
      </div>
      <div slot="minlength" class="alert alert-danger mt-1">
        Este campo debe poseer al menos {{ generoMinLength }} caracteres.
      </div>
      <div slot="genero-max-length" class="alert alert-danger mt-1">
        Este campo debe poseer máximo {{ generoMaxLength }} caracteres.
      </div>
    </field-messages>
  </validate>

  <br />
  <validate tag="div">
    <label for="director">Director</label><br>
    <input type="text" id="director" class="caja"  autocomplete="off" v-model.trim="formData.director"
      name="director" required :minlength="directorMinLength" director-max-length />

    <field-messages name="director" show="$dirty">
      <div slot="required" class="alert alert-danger mt-1">
        Campo requerido
      </div>
      <div slot="minlength" class="alert alert-danger mt-1">
        Este campo debe poseer al menos {{ directorMinLength }} caracteres.
      </div>
      <div slot="director-max-length" class="alert alert-danger mt-1">
        Este campo debe poseer máximo {{ directorMaxLength }} caracteres.
      </div>
    </field-messages>
  </validate>

  <br />

  <validate tag="div">
    <label for="duracion">Duracion</label><br>
    <input type="number" id="duracion" class="caja"  autocomplete="off" v-model.number="formData.duracion"
      name="duracion" required :min="duracionMin" :max="duracionMax" />

    <field-messages name="duracion" show="$dirty">
      <div slot="required" class="alert alert-danger mt-1">
        Campo requerido
      </div>
      <div slot="min" class="alert alert-danger mt-1">
        Debe ingresar una duracion mayor a {{ duracionMin - 1 }}
      </div>
      <div slot="max" class="alert alert-danger mt-1">
        Debe ingresar una duracion menor a {{ duracionMax }}
      </div>
    </field-messages>
  </validate>

  <br />

  <validate tag="div">
    <label for="clasificacion">Clasificación</label><br>
    <input type="text" id="clasificacion" class="caja" autocomplete="off"
      v-model.trim="formData.clasificacion" name="clasificacion" required :minlength="clasificacionLength"
      clasificacion-max-length no-espacios />

    <field-messages name="clasificacion" show="$dirty">
      <div slot="required" class="alert alert-danger mt-1">
        Campo requerido
      </div>
      <div slot="minlength" class="alert alert-danger mt-1">
        Este campo debe poseer {{ clasificacionLength }} caracteres.
      </div>
      <div slot="clasificacion-max-length" class="alert alert-danger mt-1">
        Este campo debe poseer {{ clasificacionLength }} caracteres.
      </div>
      <div slot="no-espacios" class="alert alert-danger mt-1">
        Este campo no permite espacios intermedios
      </div>
    </field-messages>
  </validate>

  <br />

  <validate tag="div">
    <label for="imagen">Imagen</label><br>
    <input type="url" id="imagen" class="caja" autocomplete="off" v-model.trim="formData.imagen"
      name="imagen" required no-espacios />

    <field-messages name="imagen" show="$dirty">
      <div slot="required" class="alert alert-danger mt-1">
        Campo requerido
      </div>
      <div slot="no-espacios" class="alert alert-danger mt-1">
        Este campo no permite espacios intermedios
      </div>
    </field-messages>
  </validate>

  <br />

  <validate tag="div">
    <label for="sinopsis">Sinopsis</label><br>
    <input type="text" id="sinopsis" class="caja" autocomplete="off" v-model.trim="formData.sinopsis"
      name="sinopsis" required />

    <field-messages name="sinopsis" show="$dirty">
      <div slot="required" class="alert alert-danger mt-1">
        Campo requerido
      </div>
    </field-messages>
  </validate>

  <br />
  <!-- class="form-control" -->
  <validate tag="div">
    <label for="precio">Precio</label><br>
    <input type="number" id="precio" class="caja"  autocomplete="off" v-model.number="formData.precio"
      name="precio" required :min="precioMin" />

    <field-messages name="precio" show="$dirty">
      <div slot="required" class="alert alert-danger mt-1">
        Campo requerido
      </div>
      <div slot="min" class="alert alert-danger mt-1">
        Debe ingresar un precio mayor a {{ precioMin - 1 }}
      </div>
    </field-messages>
  </validate>

  <br />

  <button v-if= crear class="btn btn-outline-danger my-3" :disabled="formState.$invalid">
    Enviar
  </button>
  <button v-else class="btn btn-outline-danger my-3" >
    Editar
  </button>
</vue-form>

</div>
      </th>
      <th>
        <img class="foto" src="https://static.cinemarkhoyts.com.ar/Images/Highlights/531.png"><br><br><br>
        <img class="foto" src="https://static.cinemarkhoyts.com.ar/Images/Highlights/536.png"><br><br><br>
        <img class="foto" src="https://static.cinemarkhoyts.com.ar/Images/Highlights/539.png"><br><br><br>
        <img class="foto" src="https://static.cinemarkhoyts.com.ar/Images/Highlights/545.png"><br><br><br>
      </th>
    </table>

    <button class="btn btn-danger mb-3" @click="mostrarOcultar()">{{mensaje}}</button>

    <br>
  
    <div v-show="estaMostrando">
      <div class="d-inline" v-for="(pelicula,index) in $store.state.peliculas" :key="index">
          <div id="card" class="media alert alert-black">
            <img :src="pelicula.imagen" class="m-2" :alt="pelicula.nombre" :style="{ 'border-radius' : '10px' }">
            <div class="media-body ml-2">
              <p>Nombre: <b>{{ pelicula.nombre }}</b></p>
              <p>Género: <i>{{ pelicula.genero }}</i></p>
              <p>Director: {{ pelicula.director }}</p>
              <p>Duración: <i><u>{{ pelicula.duracion }} min</u></i></p>
              <p>Clasificación: {{ pelicula.clasificacion }}</p>
              <p>Precio: {{ pelicula.precio }}</p>
              <button class="btn btn-success" @click="editarPeli(pelicula._id)">Editar</button>
              <button class="btn btn-danger ml-2" @click="deletePelicula(pelicula._id)">Borrar</button>
            </div>
          </div>
      </div>
    </div>
</div>
</section>
</template>

<script>
import Configuraciones from '../components/Configuraciones.vue'
export default {
  name: 'formulario-peli',
  components: {
    Configuraciones,
  },
  props: [],
  mounted() {
  },
  data() {
    return {
      formState: {},
      formData: this.getInitialData(),
      nombreMinLength: 5,
      nombreMaxLength: 30,
      generoMinLength: 5,
      generoMaxLength: 10,
      directorMinLength: 5,
      directorMaxLength: 20,
      duracionMin: 1,
      duracionMax: 240,
      clasificacionLength: 3,
      precioMin: 1,
      mensaje: 'Mostrar Películas',
      estaMostrando: false,
      peliActual:"",
      crear: true,
      peliId: "",
    }
  },
  methods: {
    getInitialData() {
      return {
        nombre: null,
        genero: null,
        director: null,
        duracion: null,
        clasificacion: null,
        imagen: null,
        sinopsis: null,
        precio: null
      }
    },
    async postPelicula() {
      try {
        let newPeli = { ...this.formData }
        let { data: pelicula } = await this.axios.post(this.$store.state.postPeli, newPeli, { 'content-type': 'application/json' })
        this.$store.dispatch('agregarPelicula', pelicula)
        this.crear= true;
        this.limpiarForm()
      }
      catch (error) { console.error('Error en postUsuario', error.message) }
    },
    limpiarForm() {
      this.formData = this.getInitialData();
      this.formState._reset();
    },
    mostrarOcultar(){
      !this.estaMostrando ? this.mensaje = 'Ocultar Películas' : this.mensaje = 'Mostrar Películas'
      this.estaMostrando = !this.estaMostrando
      this.formData = this.getInitialData();
      this.crear = true;
    },
    async deletePelicula(id) {
      try {
        let { data : res } = await this.axios.delete(this.$store.state.deletePeli + id)
        if(res.deletedCount) this.$store.dispatch('borrarPelicula', id)
      }
      catch(error) { console.error('Error en deletePelicula', error.message) } 
    },

    editarPeli(id){
      this.crear = false;
      this.getPelicula(id)
    },

    putPostPelicula(id){
      console.log(id)
      this.crear ? this.postPelicula() : this.putPelicula(id)
      this.peliId= ""
    },

    async getPelicula(id){
      try{
        let {data:res} = await this.axios.get(this.$store.state.getPelis + id)
        this.peliActual = res
        this.formData = this.peliActual
        this.peliId= this.peliActual._id;
      }
      catch(error) { console.error('Error en getPelicula por Id', error.message) } 

    },
    async putPelicula(id) {
/*       let peliUpdate = {
        _id: id,
        nombre: 'ORT Argentina',
        genero: 'Académico',
        director: 'Adrián Moscovich',
        duracion: 0,
        clasificacion: 'ATP+1000',
        imagen: 'https://aulavirtual.instituto.ort.edu.ar/pluginfile.php/1/theme_institutort37/logo/1667864868/logo.png',
        sinopsis: 'Se editó la película exitosamente',
        precio: 0
      } */
      try {
        let { data : res } = await this.axios.put(this.$store.state.putPeli + id, { ...this.formData }, { 'content-type' : 'application/json' })
        if(res.modifiedCount) this.$store.dispatch('updatePelicula', { ...this.formData })
         this.limpiarForm()
      }
      catch(error) { console.error('Error en editarPelicula', error.message) }        
    }
  },
  computed: {

  }
}
</script>

<style scoped lang="css">
section{
  font-family: Verdana, Geneva, Tahoma, sans-serif
}


label{
  font-size: large;
  /* font-family: 'Montserrat', sans-serif; */
   color: antiquewhite;
  background-color: rgba(31, 31, 31, 0.596);
  padding-right: 60px;
  padding-left: 60px;
  border-radius: 7px;
}
#jb1{
  color: antiquewhite;
  /* background-image: url('https://images.unsplash.com/photo-1542396601-dca920ea2807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=60');
   */
   background-image: url('https://images.unsplash.com/photo-1542931415-162aeab4418f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=60');
  background-color: rgba(32, 32, 32, 0.651);
}
#jb2{
  background-color: rgba(0, 0, 0, 0.877);
}
.tablaPeli{
  margin: auto;
}
.caja{
  margin-top: 12px;
  border: auto;
  background-color: #131212;
  color: rgb(167, 164, 164);
  border-collapse: collapse;
  /*  color: #750a06;  */
  border-radius: 7px;
  opacity: 0.7;
  width: 400px;
}
.caja:hover {
  transition: all 0.5s ease;
  box-shadow: 1px 1px 7px rgb(255, 255, 255);
}
.foto{
  padding-left: 80px;
  height: 200px;
  opacity: 0.9;
}
.foto:hover{
  transition: all 0.9s ease;
  box-shadow: 1px 4px 12px rgb(255, 255, 255);
}

#card{
  background-color: rgba(0, 0, 0, 0.856);
}
</style>