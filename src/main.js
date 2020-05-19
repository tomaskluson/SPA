import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import MyHelper from "./helpers";

Vue.config.productionTip = false;

Vue.use(MyHelper);

/* Vue.component("button-counter", {
  data: function () {
    return {
      count: 0
    };
  },
  template:
    '<button v-on:click="count++">You clicked me {{ count }} times. </button>'
}); */

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
