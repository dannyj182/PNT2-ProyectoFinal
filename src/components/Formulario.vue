<template>
  <div class="jumbotron">
    <h2>Formulario</h2>
    <hr />
    <hr />

    <div class="carousel">
      <button id="retroceder">Retroceder</button>
    <div id="imagen"></div>
      <button id="avanzar">Avanzar</button>
    </div>
    <div class="controles">
  <button id="play">Play</button>
  <button id="stop" disabled>Stop</button>
    </div>

      <img src="C:/Users/leand/PNT2-ProyectoFinal/src/images/ticket-2974645__340.jpg" style="display: none">
      <img src="C:/Users/leand/PNT2-ProyectoFinal/src/images/istockphoto-1055643718-1024x1024" style="display: none">
      <img src="C:/Users/leand/PNT2-ProyectoFinal/src/images/popcorn-1085072_960_720.jpg" style="display: none">

    <vue-form :state="formState" @submit.prevent="enviar()">

      <validate tag="div">
          <label for="nombre">Nombre y apellido</label>
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
              Campo necesario
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
          <label for="numero">Teléfono</label>
          <input
            type="number"
            id="numero"
            class="form-control"
            autocomplete="off"
            v-model.number="formData.numero"
            name="numero"
            required
          />
          
          <field-messages name="numero" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
          </field-messages>
        </validate>
  
        <br />
  
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
        <br />
  
        <button class="btn btn-outline-dark my-3" :disabled="formState.$invalid">
          Iniciar
        </button>
    </vue-form>

    <div v-if="personas.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>numero</th>
            <th>email</th>
          </tr>
          <tr v-for="(persona,index) in personas" :key="index">
            <td>{{ persona.nombre }}</td>
            <td>{{ persona.numero }}</td>
            <td>{{ persona.email }}</td>
          </tr>
        </table>
      </div>
  </div>
</template>

<script>
export default {
  name: "src-componentes-formulario",
  data () {
      return {
        formState : {},
        formData: this.getInitialData(),
        nombreMinLength: 3,
        nombreMaxLength: 15,
        personas: []
      }
    },
  methods: {
      getInitialData() {
        return {
          nombre: null,
          numero: null,
          email: null
        }
    },
    enviar() {
      let persona = {...this.formData}
      this.personas.push(persona)
      this.formData = this.getInitialData()
      this.formState._reset()
     
    }
    
    }
};
</script>

<style scoped>
</style>