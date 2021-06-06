import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// The purpose is: to prevent the start of production messages, often used as instructions
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
