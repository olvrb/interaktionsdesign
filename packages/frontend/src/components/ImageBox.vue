<script setup lang="ts">
import { NImage } from "naive-ui";
defineProps<{ title: string; description: string; image: string }>();
</script>

<template>
  <h1>{{ image }}</h1>
  <n-image width="100" v-bind:src="image" />
</template>
