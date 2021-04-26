import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue"),
  },
  {
    path: "/vuex",
    name: "vuex",
    component: () => import("@/views/vuex.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
