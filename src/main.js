import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./global.css";
import NavItem from "./components/NavItem.vue";
import HighLight from "./components/HighLight.vue";
import hljs from "highlight.js/lib/core";
import python from "highlight.js/lib/languages/python";
import MathJax, { initMathJax, renderByMathjax } from "mathjax-vue3";



hljs.registerLanguage("python", python);

function onMathJaxReady() {
  const el = document.getElementById("elementId");
  renderByMathjax(el);
}

initMathJax({}, onMathJaxReady);

createApp(App)
  .component("NavItem", NavItem)
  .component("HighLight", HighLight)
  .use(router)
  .use(MathJax)
  .mount("#app");
