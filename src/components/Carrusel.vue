<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-inline p-2 w-10" 
      src="https://static.cinemarkhoyts.com.ar/Images/Posters/c8bbddeba75e479d2400ef0e42a0a0bb.jpg?v=00000837" 
      alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-inline p-2 w-10" 
      src="https://static.cinemarkhoyts.com.ar/Images/Posters/62155eea4dbd73ca44d06e6b1da76a86.jpg?v=00000837" 
      alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-inline p-2 w-10" 
      src="https://static.cinemarkhoyts.com.ar/Images/Posters/b308536a73b38edc6556812fb69c013a.jpg?v=00000837" 
      alt="Third slide">
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
</template>

<script>
export default {
  name: 'carrusel-peli',
  props: {
    
  }
}
</script>

<style scoped>
</style>