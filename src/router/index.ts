import SideMenu from "@/views/SideMenu.vue";
import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/menu/folder/Inbox",
  },
  {
    path: "/login",
    component: () => import("../views/LoginScreen.vue"),
    name: "login",
  },
  {
    path: "/about",
    component: () => import("../views/AboutPage.vue"),
    name: "about",
  },
  {
    path: "/menu/",
    component: SideMenu,
    children: [
      {
        path: "folder/:id",
        component: () => import("../views/FolderPage.vue"),
        name: "menu.folder",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
