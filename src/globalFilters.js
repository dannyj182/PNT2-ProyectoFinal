import Vue from 'vue'


Vue.filter('pasarAMayusucula', function(value){
    return value.toUpperCase();
})

Vue.filter('formatearPrecio', function(value){
    return "$ " + value;
})

