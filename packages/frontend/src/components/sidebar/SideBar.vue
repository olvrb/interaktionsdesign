<script lang="ts">
import { collapsed, toggleSidebar, sidebarWidth } from "./State";

export default {
    props: {},
    components: { sidebarWidth },
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth };
    }
};
</script>

<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">
        <!-- Span creates a image which can be clicked to collapse the sidebar -->
        <span
            class="collapse-icon"
            :class="{ 'rotate-180': collapsed }"
            @click="toggleSidebar"
        >
            <i class="fas fa-angle-double-left" />
        </span>
    </div>
</template>

<style>
:root {
    --sidebar-bg-color: #2f855a;
    --sidebar-item-hover: #38a169;
    --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
    color: rgb(230, 16, 16);
    background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
}

.collapse-icon {
    /* Sets position of rotated icon */
    position: absolute;
    bottom: 0;
    padding: 0.75em;

    color: rgba(255, 255, 255, 0.7);

    transition: 0.2s linear;
}

.rotate-180 {
    /* Rotate the icon 180 degrees */
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>
