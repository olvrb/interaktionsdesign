import { createApp } from "vue";
import Vue from "vue";
import {
    createRouter,
    createWebHashHistory,
    createWebHistory,
    RouteRecordRaw
} from "vue-router";
import App from "./App.vue";
import UploadImageView from "./components/UploadImage/UploadImageView.vue";
import Home from "./components/Home.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes: RouteRecordRaw[] = [
    { path: "/", component: Home },
    { path: "/upload", component: UploadImageView }
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes // short for `routes: routes`
});

createApp(App, { baseUrl: "http://localhost:3224" })
    .use(router)
    .mount("#app");
