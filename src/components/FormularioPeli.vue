<template>

<div class="jumbotron">
      <h2>Formulario</h2>
      <hr />
  
      <vue-form :state="formState" @submit.prevent="enviar()">
  
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.nombre"
            name="nombre"
            required
            :minlength="nombreMinLength"
            nombre-max-length
          />
  
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
          <label for="genero">Género</label>
          <input
            type="text"
            id="genero"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.genero"
            name="genero"
            required
            :minlength="generoMinLength"
            genero-max-length
          />
  
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
          <label for="director">Director</label>
          <input
            type="text"
            id="director"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.director"
            name="director"
            required
            :minlength="directorMinLength"
            director-max-length
          />
  
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
          <label for="duracion">Duracion</label>
          <input
            type="number"
            id="duracion"
            class="form-control"
            autocomplete="off"
            v-model.number="formData.duracion"
            name="duracion"
            required
            :min="duracionMin"
            :max="duracionMax"
          />
          
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
          <label for="clasificacion">Clasificación</label>
          <input
            type="text"
            id="clasificacion"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.clasificacion"
            name="clasificacion"
            required
            :minlength="clasificacionLength"
            clasificacion-max-length
            no-espacios
          />
  
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
          <label for="imagen">Imagen</label>
          <input
            type="url"
            id="imagen"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.imagen"
            name="imagen"
            required
            no-espacios
          />
  
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
          <label for="sinopsis">Sinopsis</label>
          <input
            type="text"
            id="sinopsis"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.sinopsis"
            name="sinopsis"
            required
          />
  
          <field-messages name="sinopsis" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
          </field-messages>
        </validate>

        <br />

        <validate tag="div">
          <label for="precio">Precio</label>
          <input
            type="number"
            id="precio"
            class="form-control"
            autocomplete="off"
            v-model.number="formData.precio"
            name="precio"
            required
            :min="precioMin"
          />
          
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
  
        <button class="btn btn-outline-dark my-3" :disabled="formState.$invalid">
          Enviar
        </button>
      </vue-form>
      
  </div>

</template>

<script>
  export default  {
    name: 'formulario-peli',
    props: [],
    mounted () {
    },
    data () {
      return {
          formState : {},
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
          let peliculaNew = {...this.formData}
          let { data : pelicula } =  await this.axios.post(this.$store.state.postPelis, peliculaNew, { 'content-type' : 'application/json' })
          this.peliculas.push(pelicula)
          this.formData = this.getInitialData()
          this.formState._reset()
        }
        catch(error) { console.error('Error en postUsuario', error.message) }
      },
    },
    computed: {
      
    }
}
</script>

<style scoped lang="css">
</style>