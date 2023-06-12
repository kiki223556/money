import { createApp } from "vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import store from "@/store";
import "./styles/index.css";
import vue3GoogleLogin from "vue3-google-login";
import App from "./App.vue";

const app = createApp(App);
app.use(vue3GoogleLogin, {
  clientId: "183059677215-n8kpfe77hk7e7njus9g5g4qur2fvjc9e.apps.googleusercontent.com",
});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElementPlus);
app.use(router);
app.use(store);

app.mount("#app");
