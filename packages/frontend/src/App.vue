<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import ImageBox from "./components/ImageBox.vue";
import ImageViewer from "./components/ImageViewer.vue";
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Nyhetssida" />
  <ImageBox
    title="Vue logo"
    description="Vue logo"
    image-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
  ></ImageBox>
  <ImageViewer />
</template>

<style>
@import "./assets/style.css";
</style>
