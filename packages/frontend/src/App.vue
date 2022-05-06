<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import ImageBox from "./components/ImageBox.vue";
import ImageViewer from "./components/ImageViewer.vue";
import UploadImageView from "./components/UploadImage/UploadImageView.vue";
</script>

<template>
  <UploadImageView />
</template>

<style>
@import "./assets/style.css";
</style>
