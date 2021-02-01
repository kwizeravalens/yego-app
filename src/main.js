import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate from "vee-validate";
import axios from "axios";
import VueAxios from "vue-axios";
import { fxCore } from "./_helpers/mixins-functions.js";
import WolfModal from "./components/WolfModal.vue";
import WolfAlert from "./components/WolfAlert.vue";
import WolfButton from "./components/WolfButton.vue";
import FloatingInput from "./components/FloatingInput.vue";
import BottomDrawer from "./components/BottomDrawer.vue";

Vue.prototype.$http = axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}
axios.interceptors.request.use(
  (config) => {
    store.state.isLoading = true;
    return config;
  },
  (error) => {
    store.state.isLoading = false;
    store.state.activeBtn = null;
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    store.state.isLoading = false;
    store.state.activeBtn = null;
    return response;
  },
  (error) => {
    store.state.isLoading = false;
    store.state.activeBtn = null;
    return Promise.reject(error);
  }
);
Vue.mixin(fxCore);
Vue.use(VueAxios, axios);
Vue.use(VeeValidate);
Vue.config.productionTip = false;
Vue.component("wolf-modal", WolfModal);
Vue.component("wolf-alert", WolfAlert);
Vue.component("wolf-button", WolfButton);
Vue.component("floating-input", FloatingInput);
Vue.component("bottom-drawer", BottomDrawer);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
