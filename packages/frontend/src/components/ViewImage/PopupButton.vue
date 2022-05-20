<template>
    <main>
        <a @click="() => TogglePopup()">
            <slot></slot>
        </a>

        <popup
            v-if="popupTriggers.buttonTrigger"
            :TogglePopup="() => TogglePopup()"
            :ImageInfo="ImageInfo"
        >
        </popup>
    </main>
</template>

<script lang="ts">
import { ref } from "vue";
import popup from "./ImagePopup.vue";
import { IImage } from "../../api/Entities/Image";
export default {
    props: {
        ImageInfo: {
            type: Object as () => IImage
        }
    },

    components: { popup },
    setup() {
        const popupTriggers = ref({
            buttonTrigger: false
        });
        const TogglePopup = (trigger: string) => {
            popupTriggers.value["buttonTrigger"] = !popupTriggers.value[
                "buttonTrigger"
            ];
        };

        return {
            popup,
            popupTriggers,
            TogglePopup
        };
    }
};
</script>
