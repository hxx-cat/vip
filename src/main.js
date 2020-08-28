import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "../src/assets/css/cssreset.css";
import "../src/assets/css/iconfont.css";

import Mint from "mint-ui";
import "../node_modules/mint-ui/lib/style.css";

Vue.use(VueRouter);
Vue.use(Mint);
import router from "../src/assets/js/router";
new Vue({
  el: "#app",
  render: h => h(App),
  router
});
