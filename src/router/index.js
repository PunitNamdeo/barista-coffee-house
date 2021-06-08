import Vue from "vue";
import VueRouter from "vue-router";
const Beverages = () => import("../views/Beverages.vue");
const Calculations = () => import("../views/Calculations.vue");

Vue.use(VueRouter);
/**
 * To route on mentioned path with history mode.
 */
const routes = [
  {
    path: "/",
    name: "Beverages",
    component: Beverages,
  },
  {
    path: "/calculations",
    name: "Calculations",
    component: Calculations,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
