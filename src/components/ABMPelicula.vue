<template>

  <div id="jb1" class="jumbotron">
    
  <h2>Formulario</h2>
    <hr />

    <table class="tablaPeli">
      <th>
        <div align="center" id="jb2" class="jumbotron">

<vue-form :state="formState" @submit.prevent="enviar()">

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

  <button class="btn btn-outline-danger my-3" :disabled="formState.$invalid">
    Enviar
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
  



</div>

</template>

<script>
export default {
  name: 'formulario-peli',
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
      peliculas: []
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
    async enviar() {
      try {
        let peliculaNew = { ...this.formData }
        let { data: pelicula } = await this.axios.post(this.$store.state.postPelis, peliculaNew, { 'content-type': 'application/json' })
        this.peliculas.push(pelicula)
        this.formData = this.getInitialData()
        this.formState._reset()
      }
      catch (error) { console.error('Error en postUsuario', error.message) }
    },
  },
  computed: {

  }
}
</script>

<style scoped lang="css">

label{
  font-size: medium;
    font-family: 'Montserrat', sans-serif;
    color: #750a06;
    background-color: rgba(255, 255, 255, 0.596);

    padding-right: 60px;
    padding-left: 60px;
    border-radius: 7px;
}

#jb1{
  color: antiquewhite;
  background-image: url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
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

</style>