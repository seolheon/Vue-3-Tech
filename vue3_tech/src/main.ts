import { createApp } from "vue";
import "./shared/styles/tailwind/base.postcss";
import "./shared/styles/index.scss";

import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./shared/router";
import "./shared/styles/tailwind/index.postcss";

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);

app.mount("#app");