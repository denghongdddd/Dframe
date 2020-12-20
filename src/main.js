import Vue from 'vue'
import App from './App.vue'
import Components from './lib/index.js'

Vue.use(Components)
new Vue({
  el: '#app',
  render: h => h(App)
})
