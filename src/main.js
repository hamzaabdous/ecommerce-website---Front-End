import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './assets/tailwind.css'
import './index.css'

Vue.config.productionTip = false
// Vue.use(VueTailwind, components)

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
  
}).$mount('#app')
