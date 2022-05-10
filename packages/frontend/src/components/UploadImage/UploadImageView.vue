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
import { CategoryApiClient } from "../../api/clients/category.api";
</script>
<script lang="ts">
import { onBeforeMount, ref } from "vue";
import { ICategory } from "../../api/Entities/Category";
import { ImageApiClient } from "../../api/clients/image.api";
let categoryApiClient: CategoryApiClient;
let imageApiClient: ImageApiClient;
let categories = ref<ICategory[]>();
const submit = ref<HTMLButtonElement>();
export default {
    props: {
        baseUrl: {
            type: String,
            default: "http://localhost:3224"
        }
    },
    data() {
        return {
            categories: categories,
            selectedCategory: null,
            title: null
        };
    },
    async beforeMount() {
        categoryApiClient = new CategoryApiClient(this.baseUrl);
        imageApiClient = new ImageApiClient(this.baseUrl);
        categories.value = await categoryApiClient.search("");
    },
    async created() {},
    methods: {
        // TODO: add validation
        validateForm() {},
        submitForm: async function(event: Event) {
            event.preventDefault();

            // extract all form data
            const info = {
                imageName: (this.$refs.title as HTMLInputElement).value,
                description: (this.$refs.description as HTMLInputElement).value,
                photographer: (this.$refs.photographer as HTMLInputElement)
                    .value,
                keywords: (this.$refs.keywords as HTMLInputElement).value,
                file: (this.$refs.file as HTMLInputElement).files?.[0],
                categoryId: (this.$refs.selectedCategory as HTMLInputElement)
                    .value,
                uses: 0
            };
            const res = await imageApiClient.createImage(info);

            if (res.id) {
                this.$router.push("/?success=true");
            } else {
                alert("no success, try again");
            }
        }
    }
};
</script>

<template>
    <div class="container">
        <div class="title">
            <h1>Ladda upp bild</h1>
        </div>
        <form @submit="submitForm">
            <div class="form">
                <div id="titleDiv">
                    <label for="title">Titel</label>
                    <input ref="title" type="text" name="title" id="title" />
                </div>
                <div id="descriptionDiv">
                    <label for="description">Beskrivning</label>
                    <input
                        ref="description"
                        type="text"
                        name="description"
                        id="description"
                    />
                </div>
                <div id="photographDiv">
                    <label for="photographer">Fotograf</label>
                    <input
                        ref="photographer"
                        type="text"
                        name="photographer"
                        id="photographer"
                    />
                </div>
                <div id="keywordDiv">
                    <label for="keywords">Nyckelord</label>
                    <input
                        ref="keywords"
                        type="text"
                        name="keywords"
                        id="keywords"
                    />
                </div>
                <div id="fileUpload">
                    <label for="file">Ladda upp bild</label>
                    <input
                        ref="file"
                        aria-label="Ladda upp bild"
                        type="file"
                        name="file"
                        id="file"
                        accept="image/*"
                    />
                </div>
                <div id="categoryDiv">
                    <label for="cars">Välj en kategori</label>
                    <select
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
                                >{{ subcategory.name }}</option
                            >
                        </optgroup>
                    </select>
                </div>
                <input type="submit" value="Ladda upp bild" />
            </div>
        </form>
    </div>
</template>

<style></style>
