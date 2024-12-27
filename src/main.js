import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css';

// main.js
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// google maps
//import VueGoogleMaps from '@fawmi/vue-google-maps'

createApp(App).use(router).mount('#app')
