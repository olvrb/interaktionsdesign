<script setup lang="ts">
import { NImage } from "naive-ui";
import { imageGroupInjectionKey } from "naive-ui/lib/image/src/ImageGroup";
import { IImage } from "../../api/Entities/Image";
import PopupButton from "./PopupButton.vue";
</script>

<script lang="ts">
export default {
    props: {
        imageInfo: { type: Object as () => IImage },
        title: {
            type: String
        },
        baseUrl: {
            type: String,
            default: "http://localhost:3224"
        }
    }
};
</script>

<template>
    <div class="container">
        <popup-button :ImageInfo="imageInfo">
            <img :src="`${baseUrl}/api/image/${imageInfo.id}`" width="200" />
        </popup-button>
    </div>
</template>

<style>
.container {
    position: relative;
    object-fit: cover;
}

.image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
}

.middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}

.container:hover .image {
    opacity: 0.3;
}

.container:hover .middle {
    opacity: 1;
}
</style>
