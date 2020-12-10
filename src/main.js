import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons, CarouselPlugin } from 'bootstrap-vue'
import LangFlag from 'vue-lang-code-flags'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(CarouselPlugin)
Vue.component('lang-flag', LangFlag)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')