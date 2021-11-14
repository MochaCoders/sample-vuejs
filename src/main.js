import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/tailwind.css";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueSocialauth from "vue-social-auth";
import "@toast-ui/editor/dist/toastui-editor.css";

Vue.use(Antd);
Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

Vue.use(VueSocialauth, {
  providers: {
    google: {
      clientId:
        "631081396660-4njtnf0aaa0actc6na8haj3akr2bla83.apps.googleusercontent.com",
      client_secret: "AQfH3zYQGjnY6U5hPwg2OsPS",
      redirectUri: "http://localhost:8000/api/oauth/google/callback", // Your client app URL
    },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
