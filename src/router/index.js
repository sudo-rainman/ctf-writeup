import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/writeups",
    name: "writeups",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "writeup" */ "../views/WriteupsView.vue"),
  },
];
require
  .context("../pages/", false, /.*\.vue/)
  .keys()
  .forEach((item) => {
    let str = item.split("./")[1];
    routes.push({
      path: "/" + str.split(".vue")[0],
      component: () => import("../pages/" + str),
    });
  });
// console.log(require.context("../pages/", false, /.*\.vue/).keys());

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
