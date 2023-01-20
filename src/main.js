import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./global.css";
import NavItem from "./components/NavItem.vue";
import HighLight from "./components/HighLight.vue";

import hljs from "highlight.js/lib/core";
import python from "highlight.js/lib/languages/python";

hljs.registerLanguage("python", python);

createApp(App)
  .component("NavItem", NavItem)
  .component("HighLight", HighLight)
  .use(router)
  .mount("#app");
