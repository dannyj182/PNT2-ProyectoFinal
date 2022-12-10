<template>
  <section>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <div v-for="item in imgPelis" :key="item.id">
                <li data-target="#carouselExampleIndicators" :data-slide-to="item.id" :class=" item.id === 0? 'active' : '' "></li>
            </div>
        </ol>
        <div class="carousel-inner">
          <div v-for="(item, index) in imgPelis" :key="index" :class="index === 0 ? 'carousel-item active' : 'carousel-item'">
            <img class="d-block w-100" :src='item.img' :alt="item.id" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'carrusel-peli',
  data () {
      return {
         imgPelis: [          
          {id: 0, img: require('../assets/cine1.png' )},
          {id: 1, img: require('../assets/cine2.png')},
          {id: 2, img: require('../assets/cine3.png')},
          {id: 3, img: require('../assets/cine4.png')},
          {id: 4, img: require('../assets/cine5.png')},
          {id: 5, img: require('../assets/cine6.png')},
          {id: 6, img: require('../assets/cine7.png')},
          {id: 7, img: require('../assets/cine1.png')},
          {id: 8, img: require('../assets/cine2.png')},
          {id: 9, img: require('../assets/cine3.png')},
         ]
      }
  },
  props: {
    
  }
}
</script>

<style scoped>
section{
  font-family: Verdana, Geneva, Tahoma, sans-serif
}


</style>