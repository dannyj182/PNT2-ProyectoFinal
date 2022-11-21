import Vue from 'vue'

const miMixinGlobal = {
    methods:{

    },

    computed: {
        
    }
}

Vue.filter('pasarAMayuscula', function(value){
    return value.toUpperCase();
})

Vue.filter('reverse', function(value){
    return value.split('').reverse().join('');
})