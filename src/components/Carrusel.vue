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
            <img class="d-block w-100" :src="item.img" :alt="item.id" />
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
          {id: 0, img: 'https://static.cinemarkhoyts.com.ar/Images/Highlights/542.png'},
          {id: 1, img: 'https://static.cinemarkhoyts.com.ar/Images/Highlights/531.png'},
          {id: 2, img: 'https://static.cinemarkhoyts.com.ar/Images/Highlights/535.png'},
          {id: 3, img: 'https://static.cinemarkhoyts.com.ar/Images/Highlights/536.png'},
          {id: 4, img: 'https://static.cinemarkhoyts.com.ar/Images/Highlights/537.png'},
          {id: 5, img: 'https://static.cinemarkhoyts.com.ar/Images/Highlights/539.png'},
          {id: 6, img: 'https://static.cinemarkhoyts.com.ar/Images/Highlights/541.png'},
          {id: 7, img: 'https://static.cinemarkhoyts.com.ar/Images/Highlights/542.png'},
          {id: 8, img: 'https://static.cinemarkhoyts.com.ar/Images/Highlights/547.png'},
          {id: 9, img: 'https://static.cinemarkhoyts.com.ar/Images/Highlights/545.png'},
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