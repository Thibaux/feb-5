import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueCountdown from '@chenfengyuan/vue-countdown';


Vue.config.productionTip = false

Vue.component(VueCountdown.name, VueCountdown);
// Vue.component('vue-player', VuePlayer)

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')