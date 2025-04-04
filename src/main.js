// vue3 = createApp pour monter l'application
import { createApp } from 'vue';
import App from './App.vue'
// import router dans le main.js
import router from './router'

createApp(App).use(router).mount('#app');