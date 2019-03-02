// This is where it all goes :)
import Vue from 'vue'
// import App from './components/App.vue'
import Main from './components/Main.vue'
import Menu from './components/Menu.vue'
import Button from './components/Button.vue'

Vue.config.productionTip = false

// new Vue({
//   el: '#application-container',
//   template: '<App/>',
//   components: { App }
// })

new Vue({
  el: '#main-container',
  template: '<Main/>',
  components: { Main }
})

new Vue({
  el: '#menu-container',
  template: '<Menu/>',
  components: { Menu }
})

new Vue({
  el: '#button-container',
  template: '<Button/>',
  components: { Button }
})

//
// document.write(
//     '<script src="http://' +
//     (location.host || 'localhost').split(':')[0] +
//     ':4567/livereload.js?snipver=1"></' +
//     'script>'
// )


// $(function() {
//     var a = $(".audio_button")
//       , o = $(".audio_wrap")
//       , l = document.getElementById("audio");
//     a.on("click", function() {
//         console.log("Play");
//         o.hasClass("play") ? (l.pause(),
//         o.removeClass("play")) : (l.play(),
//         o.addClass("play"))
//     })
// });
