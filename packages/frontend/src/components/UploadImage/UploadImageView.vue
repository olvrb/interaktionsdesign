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
import CategoryViewer from "../DataSelection/CategoryViewer.vue";
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
                // get child ref for input value
                categoryId: ((this.$refs.selectedCategory as any).$refs
                    .selectedCategory as HTMLInputElement).value,
                uses: 0
            };
            const res = await imageApiClient.createImage(info);

            console.log(info);

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
    <div class="row">
        <div class="row-75">
            <div class="container">
                <form @submit="submitForm">
                    <div class="row">
                        <div class="col-50">
                            <h3>Bild</h3>
                            <div id="titleDiv">
                                <label for="title">Titel</label>
                                <input
                                    ref="title"
                                    type="text"
                                    name="title"
                                    id="title"
                                />
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
                            <div class="row">
                                <div class="col-25">
                                    <div id="photographDiv">
                                        <label for="photographer"
                                            >Fotograf</label
                                        >
                                        <input
                                            ref="photographer"
                                            type="text"
                                            name="photographer"
                                            id="photographer"
                                        />
                                    </div>
                                </div>
                                <div class="col-25">
                                    <div id="keywordDiv">
                                        <label for="keywords">Nyckelord</label>
                                        <input
                                            ref="keywords"
                                            type="text"
                                            name="keywords"
                                            id="keywords"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-25">
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
                                <category-viewer
                                    ref="selectedCategory"
                                    :categories="categories"
                                />
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Ladda upp bild" />
                </form>
            </div>
        </div>
    </div>
</template>

<style>
.row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    margin: 0 -16px;
}

.col-25 {
    -ms-flex: 25%; /* IE10 */
    flex: 25%;
}

.col-50 {
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
}

.col-75 {
    -ms-flex: 75%; /* IE10 */
    flex: 75%;
}

.col-25,
.col-50,
.col-75 {
    padding: 0 16px;
}

.container {
    background-color: #f2f2f2;
    padding: 5px 20px 15px 20px;
    border: 1px solid lightgrey;
    border-radius: 3px;
}

input[type="text"] {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

label {
    margin-bottom: 10px;
    display: block;
    font-size: 20px;
}
@media (max-width: 800px) {
    .row {
        flex-direction: column-reverse;
    }
    .col-25 {
        margin-bottom: 20px;
    }
}
</style>
