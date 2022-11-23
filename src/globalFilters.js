import Vue from 'vue'


Vue.filter('pasarAMayusucula', function(value){
    return value.toUpperCase();
})

Vue.filter('reverse', function(value){
    return value.split('').reverse().join('');
})