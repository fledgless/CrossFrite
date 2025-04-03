// import Vue from "vue";
// import Router from "vue-router";
// changement des imports pour utiliser des méthodes Vue3 
import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import SubscriptionView from "@/views/SubscriptionView.vue";
import ContactView from "@/views/ContactView.vue";

// Vue.use(Router);
// maintenant implémenté dans le main.js au moment de monter l'application
// export default new Router plus utilisé avec vue 3, on utilise une constante

const routes =  [
  { 
    path: "/", 
    name: "Home", 
    component: HomeView,
  },
  { 
    path: "/subscription", 
    name: "Subscription", 
    component: SubscriptionView,
  },
  { 
    path: "/contact", 
    name: "Contact", 
    component: ContactView,
  },
];

// création du router 
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
