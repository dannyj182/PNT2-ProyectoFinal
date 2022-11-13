<template>

  <section class="src-componentes-formulario">
    <div class="jumbotron">
      <br><br>
      <h2 class="text-center">Log in</h2>
      <vue-form :state="formstate" @submit.prevent="enviar()" class="m-5">
        
       <!-- Campo nombre -->
        <validate tag="div" class="text-left">
          <label for="nombre">Mail</label>
          <input type="text" id="nombre" v-model="formData.nombre" required name="nombre" autocomplete="off" class="form-control"    :minlength="nombreMinLength"
            :maxlength="nombreMaxLength" no-espacios />
    
            <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo debe tener al menos entre {{ nombreMinLength }} y {{ nombreMaxLength }}  caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              Este campo no permite espacios intermedios
            </div>

          </field-messages>
        </validate>
        <br>

        <!-- Campo Descripción -->
        <validate tag="div" class="text-left">
          <label for="descripcion">Contraseña</label>
          <input type="text" id="descripcion" v-model="formData.descripcion" required name="descripcion" autocomplete="off" class="form-control" />
          <field-messages name="descripcion" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
          </field-messages>
        </validate>
        <br>

    
        <button class="btn btn-success my-3" :disabled="formstate.$invalid" type="submit">Enviar</button>


      </vue-form>
      <br>

      

    </div>
  </section>
</template>

<script>

  export default  {
    name: 'src-componentes-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formstate : {},
        formData : this.getInitialData(),
        gastos : [],
        nombreMinLength: 3,
        nombreMaxLength: 15,
        total: 0,
        presupuesto: "",
        gastoTopeMin: 1000,
        gastoTopeMax: 5000,

      }
    },
    methods: {
      getInitialData() {
        return {
          nombre : null,
          descripcion: null,
          importe: null,
        }
      },

      limpiar(){
        this. gastos = [],
        this.presupuesto = "",
        this.total = 0
      },
      enviar() {
        let gasto = {...this.formData}
        this.total += gasto.importe
        gasto.fecha = new Date().toLocaleString()
        this.gastos.push(gasto)
        this.formData = this.getInitialData()
        this.formstate._reset()
      },
      
      calcularTotal() {
        let color = "#FF00FF"
        if(this.presupuesto > 0 ) this.gastoTopeMax = this.presupuesto;
        if(this.total < this.gastoTopeMin) color = "#14A44D"
        if(this.total > (this.gastoTopeMax)) color = "#E4A11B"

        return {
          total: this.total,
          color
        }
      }
    },
    computed: {
    }
}


</script>

<style scoped lang="css">
  .src-componentes-ingreso {

  }

  .jumbotron {
    background-color: rgb(34, 30, 97);
    color: white;
  }

  hr {
    background-color: #eee;
  }

  pre {
    color: white;
  }
</style>
