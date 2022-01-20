import Vue from "vue";
import App from "./App.vue";
import "./assets/css/styles.scss";
import "./assets/css/reset.scss";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
