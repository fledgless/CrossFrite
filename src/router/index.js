import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Subscription from "@/views/Subscription.vue";
import Contact from "@/views/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/subscription", name: "Subscription", component: Subscription },
    { path: "/contact", name: "Contact", component: Contact },
  ],
});
