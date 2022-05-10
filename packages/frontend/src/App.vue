<script setup lang="ts">
<<<<<<< HEAD
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// Testar mvh Agnes
import HelloWorld from "./components/HelloWorld.vue";
import ImageBox from "./components/ImageBox.vue";
import ImageViewer from "./components/ImageViewer.vue";
=======
import { TopBar } from "./components/TopBar.vue";
export default {
  name: "App",
  components: { TopBar },
};
>>>>>>> 3fce47acbaa7102238233a0c0f12da3907c157d9
</script>

<template>
  <TopBar></TopBar>

</template>

<style>
@import "./assets/style.css";
</style>
