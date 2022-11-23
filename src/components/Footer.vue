<template>

  <section class="src-components-footer">
        <footer class="text-white text-center text-lg-start" style="background-color: #23242a;">
        <!-- Grid container -->
        <div class="container p-4">
        <!--Grid row-->
        <div class="row mt-4">
            <!--Grid column-->
            <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-4">🎬 Cine ORT</h5>
            <div class="mt-4">
                <!-- Facebook -->
                <a type="button" class="btn btn-link btn-floating btn-lg text-light m-1"><i class="bi bi-facebook"></i></a>
                <!-- Dribbble -->
                <a type="button" class="btn btn-link btn-floating btn-lg text-light m-1"><i class="bi bi-instagram"></i></a>
                <!-- Twitter -->
                <a type="button" class="btn btn-link btn-floating btn-lg text-light m-1"><i class="bi bi-twitter"></i></a>
                <!-- Google + -->
                <a type="button" class="btn btn-link btn-floating btn-lg text-light m-1"><i class="bi bi-linkedin"></i></a>
                <!-- Linkedin -->
            </div>
            </div>
            <!--Grid column-->
            <!--Grid column-->
            <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-4 pb-1">Info</h5>
            <ul class="fa-ul list-unstyled" style="margin-left: 1.65em;">
                <li class="mb-3">
                <span class="fa-li"><i class="fas fa-home"></i></span><span class="ms-2">Almagro, Yatay 650, Arg</span>
                </li>
              
            </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            
            <!--Grid column-->
        </div>
        <!--Grid row-->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3 " style="background-color: rgba(0, 0, 0, 0.2);">
        © 2022 Copyright:
        <p class="text-white d-inline">Cine Ort - Jimenez, Ortega, Pereyra, Taddeo</p>  <br><br>{{ mostrarHoraActual }} 
        </div>
        <!-- Copyright -->
    </footer>
  
  </section>
</template>

<script>
  export default  {
    name: 'src-components-footer',
    props: [],

    data () {
      return {
         
      }
    },
    methods: {
    
  }
  }
</script>

<style scoped lang="css">
  .jumbotron {
    background-color: teal;
    color: white;
  }
  hr {
    background-color: #bbb;
  }
</style>
