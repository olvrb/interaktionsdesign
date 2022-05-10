<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { ref } from "@vue/reactivity";
import UploadImageView from "./components/UploadImage/UploadImageView.vue";
import { CategoryApiClient } from "./api/clients/category.api";
</script>
<script lang="ts">
let categoryApiClient: CategoryApiClient;
export default {
    props: {
        baseUrl: String
    }
};
</script>

<template>
    <UploadImageView
        :category-api-client="
            baseUrl ? new CategoryApiClient(baseUrl) : undefined
        "
    />
</template>

<style>
@import "./assets/style.css";
</style>
