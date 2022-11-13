import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import './bootstrap'
import './axios'
import './form'

window.onload = function () {
  // Variables
  const IMAGENES = [
      'images/popcorn-1085072_960_720.jpg',
      'images/ticket-2974645__340.jpg',
      'images/istockphoto-1055643718-1024x1024.jpg'
  ];
  const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
  let posicionActual = 0;
  let $botonRetroceder = document.querySelector('#retroceder');
  let $botonAvanzar = document.querySelector('#avanzar');
  let $imagen = document.querySelector('#imagen');
  let $botonPlay = document.querySelector('#play');
  let $botonStop = document.querySelector('#stop');
  let intervalo;

  // Funciones

  /**
   * Funcion que cambia la foto en la siguiente posicion
   */
  function pasarFoto() {
      if(posicionActual >= IMAGENES.length - 1) {
          posicionActual = 0;
      } else {
          posicionActual++;
      }
      renderizarImagen();
  }

  /**
   * Funcion que cambia la foto en la anterior posicion
   */
  function retrocederFoto() {
      if(posicionActual <= 0) {
          posicionActual = IMAGENES.length - 1;
      } else {
          posicionActual--;
      }
      renderizarImagen();
  }

  /**
   * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
   */
  function renderizarImagen () {
      $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
  }

  /**
   * Activa el autoplay de la imagen
   */
  function playIntervalo() {
      intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
      // Desactivamos los botones de control
      $botonAvanzar.setAttribute('disabled', true);
      $botonRetroceder.setAttribute('disabled', true);
      $botonPlay.setAttribute('disabled', true);
      $botonStop.removeAttribute('disabled');

  }

  /**
   * Para el autoplay de la imagen
   */
  function stopIntervalo() {
      clearInterval(intervalo);
      // Activamos los botones de control
      $botonAvanzar.removeAttribute('disabled');
      $botonRetroceder.removeAttribute('disabled');
      $botonPlay.removeAttribute('disabled');
      $botonStop.setAttribute('disabled', true);
  }

  // Eventos
  $botonAvanzar.addEventListener('click', pasarFoto);
  $botonRetroceder.addEventListener('click', retrocederFoto);
  $botonPlay.addEventListener('click', playIntervalo);
  $botonStop.addEventListener('click', stopIntervalo);
  // Iniciar
  renderizarImagen();
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
