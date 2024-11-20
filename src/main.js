import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/bootstrap-css/bootstrap.min.css';
import './assets/js/bootstrap-js/bootstrap.bundle.min.js';
import './assets/css/style.css';
import router from './routers';

createApp(App)
    .use(router)
.mount('#app')
