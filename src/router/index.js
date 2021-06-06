import Vue from "vue";
import VueRouter from "vue-router";
const Prices = () => import("../views/Beverages.vue");
const Calculations = () => import("../views/Calculations.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Prices",
    component: Prices,
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
