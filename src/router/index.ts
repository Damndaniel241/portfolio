import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
         {
            path: "/",
            name: "Index",
            component: () => import("@/views/IndexView.vue"),
            // meta: { backgroundColor: "#ece7e1" },
         },
         {
            path: "/contact",
            name: "Contact",
            component: () => import("@/views/ContactView.vue"),
            // meta: { backgroundColor: "#222222" },
         },
         {
            path: "/articles",
            name: "Articles",
            component: () => import("@/views/ArticlesView.vue"),
         },
         {
            path: "/work",
            name: "Work",
            component: () => import("@/views/WorkView.vue"),
         },
         {
            path: "/about",
            name: "About",
            component: () => import("@/views/AboutView.vue"),
         },
    ]});