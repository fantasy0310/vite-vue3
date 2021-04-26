import { createApp } from "vue";
import Vant from "vant";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

createApp(App).use(router).use(store).use(Vant).mount("#app");
