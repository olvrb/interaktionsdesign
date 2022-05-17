<script setup lang="ts">
import { NGrid, NGridItem, NSpace, NImageGroup, NImage } from "naive-ui";
import ImageBox from "./ImageBox.vue";
</script>
<script lang="ts">
import { onBeforeMount, ref } from "vue";
import { CategoryApiClient } from "../../api/clients/category.api";
import { IImage } from "../../api/Entities/Image";
import { ImageApiClient } from "../../api/clients/image.api";

const filesystem = ref<any>();
const images = ref<IImage[]>();
let imageApiClient: ImageApiClient;

export default {
    props: {
        baseUrl: {
            type: String,
            default: "http://localhost:3224"
        }
    },
    data() {
        return {};
    },
    async beforeMount() {
        imageApiClient = new ImageApiClient(this.baseUrl);
        images.value = await imageApiClient.search("", "");
        console.log(images.value);
    },
    async created() {}
};
</script>
<template>
    <!-- <a>{{ filesystem }}</a> -->

    <n-grid
        :x-gap="12"
        y-gap="8"
        cols="2 s:3 m:4 l:5 xl:6 2xl:7"
        responsive="screen"
    >
        <n-grid-item v-for="image in images" :key="image.id">
            <div>{{ image.name }}</div>
            <div class="special">
                <ImageBox :image-info="image" />
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
