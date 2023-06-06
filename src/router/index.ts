import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "/diary",
        name: "diary",
        component: () => import("../views/Diary.vue"),
      },
      {
        path: "/report",
        name: "report",
        component: () => import("@/views/Report.vue"),
      },
      {
        path: "/setting",
        name: "setting",
        component: () => import("@/views/Setting.vue"),
      },
      {
        path: "/memo",
        name: "memo",
        component: () => import("@/views/Memo.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
