import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VuePlayer from '@iomariani/vue-player'
import '@iomariani/vue-player/dist/vue-player.css'

Vue.config.productionTip = false

Vue.component('vue-player', VuePlayer)

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')