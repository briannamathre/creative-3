import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Browse from "../views/Browse.vue";
import Selected from "../views/Selected.vue";
import Hypoallergenic from "../views/Hypoallergenic.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/hypoallergenic',
    name: 'Hypoallergenic',
    component: Hypoallergenic
  },
  {
  path: '/selected',
    name: 'Selected',
    component: Selected
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
