import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Layout from "@/views/Layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
