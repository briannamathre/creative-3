import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import doggie from './dog-data.js'

Vue.config.productionTip = false;

let data = {
  dogs: doggie,
  cart: []
}
new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
