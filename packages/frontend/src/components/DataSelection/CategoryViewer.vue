<script setup lang="ts">
import { Ref, ref } from "@vue/reactivity";
import { ICategory } from "../../api/Entities/Category";
defineProps<{
    categories: ICategory[] | undefined;
    isFilter: boolean;
}>();
</script>

<script lang="ts">
export default {
    props: {
        onchange: {
            type: Function
        },
        isFilter: {
            type: String,
            default: false
        }
    },
    data() {
        return {
            isFilter: false
        };
    },
    created() {}
};
</script>

<template>
    <select
        @change="onchange"
        ref="selectedCategory"
        name="category"
        id="category"
    >
        <option v-if="isFilter" value="">
            alla
        </option>

        <optgroup
            :label="category.name"
            v-for="category in categories"
            :key="category.id"
        >
            <option
                :value="subcategory.id"
                v-for="subcategory in category.children"
                :key="subcategory.id"
            >
                {{ subcategory.name }}
            </option>
        </optgroup>
    </select>
</template>

<style scoped>
#categories {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
