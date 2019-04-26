import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

import App from "./App.vue";
import { routes } from "./router";
import store from "./store/store"

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "https://vue-stock-traders-2dd5d.firebaseio.com/";

Vue.filter('currency', (value) => {
  return "$ " + value.toLocaleString();
})
const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
