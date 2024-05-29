import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create",
    name: "create",
    component: () => import(/* webpackChunkName: "create" */ "../views/CreateView.vue"),
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: () => import(/* webpackChunkName: "edit" */ "../views/EditView.vue"),
  },
  {
    path: "/post/:id",
    name: "Post",
    component: () => import(/* webpackChunkName: "edit" */ "../views/PostView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
