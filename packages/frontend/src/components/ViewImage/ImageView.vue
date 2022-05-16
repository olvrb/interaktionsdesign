<script setup lang="ts">
import { NGrid, NGridItem, NSpace, NImageGroup, NImage } from "naive-ui";
import { onBeforeMount, ref } from "vue";
import ImageBox from "../ImageBox.vuee";

const filesystem = ref<any>();

onBeforeMount(async () => {
    filesystem.value = await (
        await fetch("http://localhost:3224/api/images", { mode: "cors" })
    ).json();
});
</script>
<template>
    <!-- <a>{{ filesystem }}</a> -->

    <n-grid
        :x-gap="12"
        y-gap="8"
        cols="2 s:3 m:4 l:5 xl:6 2xl:7"
        responsive="screen"
    >
        <n-grid-item v-for="file in filesystem" :key="file">
            <div>{{ file.fileName }}</div>
            <div class="special">
                <ImageBox
                    v-if="!file.isDirectory"
                    :title="file.fileName"
                    description="{{ file.fileName }}"
                    :imageSrc="
                        `http://localhost:3224/api/image/${file.fileName}`
                    "
                />
            </div>
        </n-grid-item>
    </n-grid>
</template>

<style>
.special {
    max-width: 100%;
    height: auto;
}
</style>
