import Vue from "vue";
import App from "./App.vue";

import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);

import VueParallaxJs from "vue-parallax-js";
Vue.use(VueParallaxJs);

Vue.config.productionTip = false;

import VueRouter from 'vue-router'
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/", 
      component: App,
    }, {
      path: "/:pathMatch(.*)*", 
      redirect: () => {
        const url = window.location.href;
        let newUrl = "";
        if (url.includes("localhost")) {
          newUrl = url.replace("localhost:8080/#", "robinmazumderdotcom.wordpress.com");
        } else if (url.includes("robinmazumder.com")) {
          newUrl = url.replace("robinmazumder.com", "robinmazumderdotcom.wordpress.com");
        }
        window.location.href = newUrl;
      }
    }
  ]
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
