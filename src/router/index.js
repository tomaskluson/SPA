// deps
import Vue from "vue";
import VueRouter from "vue-router";

// views
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Tunes from "../views/Tunes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/tunes",
    component: Tunes
    /* component: () =>
    import('../views/Contact.vue') */
  },
  {
    path: "/about",
    component: About
    /* component: () =>
    import('../views/About.vue') */
  }
];

const router = new VueRouter({
  routes
});

export default router;
