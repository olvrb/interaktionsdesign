<script lang="ts">
// Component which defines the top bar of the application
</script>

<template>
    <div class="topnav">
        <h1 class="title">Bothniabladet</h1>
        <p class="infologin">Välkommen, Admin</p>
        <router-link to="/">Home</router-link>
        <router-link to="/upload">Upload</router-link>
    </div>
</template>

<style scoped>
.title {
    color: #eee;
}

.infologin{
    color: #eee;
    position: absolute;
    top:0;
    right:0;
    margin-right: 20px;
}
.topnav {
    background-color: #333;
    overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 20px;
}

/* Change the color of links on hover */
.topnav a:hover {
    background-color: #ddd;
    color: black;
}

/* Add a color to the active/current link */
.topnav .router-link-active {
    background-color: #04aa6d;
    color: white;
}
</style>
