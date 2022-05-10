<script setup lang="ts">
import {
    NGrid,
    NGridItem,
    NSpace,
    NImageGroup,
    NImage,
    NInput,
    NAutoComplete
} from "naive-ui";
</script>

<template>
    <div class="container">
        <div class="title">
            <h1>Ladda upp bild</h1>
        </div>
        <div class="form">
            <NAutoComplete
                v-model:value="valueRef"
                :options="options"
                placeholder="Email"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
const valueRef = ref("");
export default defineComponent({
    setup() {},
    data() {
        return {
            value: valueRef,
            options: computed(() => {
                return [
                    ["Google", "@gmail.com"],
                    ["Netease", "@163.com"],
                    ["Tencent", "@qq.com"]
                ].map((emailInfo) => {
                    return {
                        type: "group",
                        label: emailInfo[0],
                        key: emailInfo[0],
                        children: [valueRef.value.split("@")[0] + emailInfo[1]]
                    };
                });
            })
        };
    }
});
</script>

<style></style>
