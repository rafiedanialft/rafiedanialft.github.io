import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import './style.scss'
    
createApp(App).use( VueSplide ).mount('#app');
