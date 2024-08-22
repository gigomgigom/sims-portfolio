import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'
import Aos from 'aos'

import 'bootstrap';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';

global.$ = jQuery

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(Aos).use(store).use(router).mount('#app')
