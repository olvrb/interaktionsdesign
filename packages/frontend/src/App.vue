<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { ref } from "@vue/reactivity";
import UploadImageView from "./components/UploadImage/UploadImageView.vue";
import { CategoryApiClient } from "./api/clients/category.api";
</script>
<script lang="ts">
import TopBar from "./components/topbar/TopBar.vue";

let categoryApiClient: CategoryApiClient;
export default {
    name: "App",
    props: {
        baseUrl: String
    },
    components: { TopBar }
};
</script>

<template>
    <router-link to="/">Home</router-link>
    <router-link to="/upload">Upload</router-link>

    <router-view></router-view>
</template>

<style>
@import "./assets/style.css";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
