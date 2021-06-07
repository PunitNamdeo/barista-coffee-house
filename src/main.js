import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import { state, actions, mutations, getters } from "@/store";

// The purpose is: to prevent the start of production messages, often used as instructions
Vue.config.productionTip = false;
Vue.use(Vuex);
const store = new Vuex.Store({ state, actions, mutations, getters });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
