import { createApp } from 'vue';
import App from './App.vue';
import './routers';
import './assets/css/bootstrap-css/bootstrap.min.css';
import './assets/js/bootstrap-js/bootstrap.bundle.min.js';
import './assets/css/style.css';

createApp(App).use(router).mount('#app')
