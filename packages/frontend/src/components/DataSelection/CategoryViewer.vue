<script setup lang="ts">
import { Ref, ref } from "@vue/reactivity";
import { ICategory } from "../../api/Entities/Category";
ref();
defineProps<{
    categories: ICategory[] | undefined;
}>();
</script>

<script lang="ts">
export default {
    props: {
        onchange: {
            type: Function
        }
    },
    data() {}
};
</script>

<template>
    <select
        @change="onchange"
        ref="selectedCategory"
        name="category"
        id="category"
    >
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
