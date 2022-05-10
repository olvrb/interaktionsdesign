<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { ref } from "@vue/reactivity";
import UploadImageView from "./components/UploadImage/UploadImageView.vue";
import { CategoryApiClient } from "./api/clients/category.api";
</script>
<script lang="ts">
export default {
    
import { TopBar } from "./components/TopBar.vue";
let categoryApiClient: CategoryApiClient;
export default {
  name: "App",
  props: {
        baseUrl: String
  },
  components: { TopBar },
};
</script>

<template>
    <router-link to="/">Home</router-link>
    <router-link to="/upload">Upload</router-link>

    <router-view></router-view>

</template>

<style>
@import "./assets/style.css";
</style>
