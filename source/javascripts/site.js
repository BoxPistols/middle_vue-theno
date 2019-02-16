// This is where it all goes :)
import Vue from 'vue'
// import App from './components/App.vue'
import Main from './components/Main.vue'
import Menu from './components/Menu.vue'

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

// 
// document.write(
//     '<script src="http://' +
//     (location.host || 'localhost').split(':')[0] +
//     ':4567/livereload.js?snipver=1"></' +
//     'script>'
// )
