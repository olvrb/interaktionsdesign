<script setup lang="ts">
import { Ref, ref } from "@vue/reactivity";
import { ICategory } from "../api/Entities/Category";
ref();
defineProps<{
    categories: ICategory[] | undefined;
}>();
</script>
<template>
    <select ref="selectedCategory" name="category" id="category">
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
