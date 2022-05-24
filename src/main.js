import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import "../src/assets/scss/main.scss"
// import "../src/assets/scss/global/_variables.scss"
// import './axios'
import * as VueGoogleMaps from 'vue2-google-maps' 
// import VueAxios from 'vue-axios'

Vue.use(VueGoogleMaps,{
  load: {
    // key: 'AIzaSyBu6RuVC1cZwqqOpfcm8fDxZ2EJC6Qi8oI',
    key: 'AIzaSyCgUsajH7cANXTJDpXJCT9x2n2Hj9kN0OE',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
})  
// Vue.use(VueAxios)
Vue.config.productionTip = false



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
