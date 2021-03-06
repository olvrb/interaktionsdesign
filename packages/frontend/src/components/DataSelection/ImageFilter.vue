<script lang="ts">
import { ref } from "@vue/reactivity";
import { CategoryApiClient } from "../../api/clients/category.api";
import { ImageApiClient } from "../../api/clients/image.api";
import { ICategory } from "../../api/Entities/Category";
import { ImageSearchRequest } from "../../api/Request";
import CategoryViewer from "./CategoryViewer.vue";
import SearchInput from "./SearchInput.vue";

let dropdown = ref();
let categoryApiClient: CategoryApiClient;
let imageApiClient: ImageApiClient;
let categories = ref<ICategory[]>();

export default {
    props: {
        baseUrl: {
            type: String,
            default: "http://localhost:3224"
        },
        update: {
            type: Function
        }
    },
    data() {
        return {
            dropdown: dropdown,
            categories: categories
        };
    },
    async beforeMount() {
        categoryApiClient = new CategoryApiClient(this.baseUrl);
        imageApiClient = new ImageApiClient(this.baseUrl);
        categories.value = await categoryApiClient.search("");
    },
    methods: {
        toggleDropdown(event: Event) {
            const dropdownVal = event.target as HTMLButtonElement;
            if (!dropdownVal) return;
            dropdownVal.classList.toggle("active");
            let dropdownContent = dropdownVal.nextElementSibling as HTMLAnchorElement;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        },
        filter() {
            // Get values from inputs and filter images
            const categoryId = (this.$refs.selectedCategory as any).$refs
                .selectedCategory.value;
            const titleQuery = (this.$refs.titleQuery as any).$refs.textarea
                .value;
            const keywordQuery = (this.$refs.keywordQuery as any).$refs.textarea
                .value;

            const searchReq: ImageSearchRequest = {
                categoryId,
                titleQuery,
                keywordQuery
            };
            (this.update as (data: ImageSearchRequest) => void)(searchReq);
        }
    },
    components: { CategoryViewer, SearchInput }
};
</script>
<template>
    <div class="sidenav">
        <h3>Filter</h3>
        <div id="categories">
            <category-viewer
                :isFilter="true"
                :onchange="filter"
                ref="selectedCategory"
                :categories="categories"
            />
        </div>
        <search-input :onchange="filter" ref="titleQuery" placeholder="title" />
        <search-input
            :onchange="filter"
            ref="keywordQuery"
            placeholder="keywords"
        />
    </div>
</template>

<style scoped>
.sidenav a,
.dropdown-btn {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    outline: none;
}
.sidenav a:hover,
.dropdown-btn:hover {
    color: #f1f1f1;
}
.dropdown-container {
    display: none;
    background-color: #262626;
    padding-left: 8px;
}
body {
    font-family: "Lato", sans-serif;
}

.sidenav {
    width: 15%;
    position: fixed;
    z-index: 1;
    background: rgb(167, 165, 165);
    overflow-x: hidden;
    padding: 10px 30px 30px 30px;
}

.sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #2196f3;
    display: block;
}

.sidenav a:hover {
    color: #064579;
}

.main {
    margin-left: 140px; /* Same width as the sidebar + left position in px */
    font-size: 28px; /* Increased text to enable scrolling */
    padding: 0px 30px;
}

@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }
    .sidenav a {
        font-size: 18px;
    }
}
</style>
