<!--<script setup lang="ts"> 
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import ImageBox from "./components/ImageBox.vue";
import ImageViewer from "./components/ImageViewer.vue";
</script> -->

<!-- <template>
  <HelloWorld msg="Nyhetssida" />
  <ImageViewer />
</template>-->

<script setup lang="ts">
import PopupButton from "./components/ViewImage/PopupButton.vue";
import Home from "./components/Home.vue";
</script>

<template>
    <Home />
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
