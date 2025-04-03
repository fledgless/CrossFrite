// changement de la méthode pour monter l'appli avec la fonction createApp
// le router est maintenant créé ici
import { createApp } from 'vue';
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app');