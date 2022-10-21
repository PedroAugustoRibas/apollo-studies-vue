import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createProvider } from './plugins/vue-apollo'
import 'core-js/stable';
import 'regenerator-runtime/runtime'; 
import vuetify from './plugins/vuetify'
import VueShepherd from 'vue-shepherd'
import 'shepherd.js/dist/css/shepherd.css';
Vue.config.productionTip = false
Vue.use(VueShepherd)
new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  vuetify,
  render: h => h(App)
}).$mount('#app')
