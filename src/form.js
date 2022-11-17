import Vue from "vue";

import VueForm from "vue-form";

let options = {
    validators : {
        "no-espacios" : function(value){
            return !value.includes(" ")
        },
        'nombre-max-length' : function(value){
            return value.length <= 20
        },
        'clasificacion-max-length' : function(value){
            return value.length <= 3
        },
    }
}

Vue.use(VueForm, options)