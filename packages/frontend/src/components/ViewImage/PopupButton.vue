<template>
    <main>
        <button @click="() => TogglePopup('buttonTrigger')">Open Popup</button>

        <popup
            v-if="popupTriggers.buttonTrigger"
            :TogglePopup="() => TogglePopup('buttonTrigger')"
        >
        </popup>
    </main>
</template>

<script>
import { ref } from "vue";
import popup from "./ImagePopup.vue";
export default {
    components: { popup },
    setup() {
        const popupTriggers = ref({
            buttonTrigger: false
        });
        const TogglePopup = (trigger) => {
            popupTriggers.value[trigger] = !popupTriggers.value[trigger];
        };

        return {
            popup,
            popupTriggers,
            TogglePopup
        };
    }
};
</script>
