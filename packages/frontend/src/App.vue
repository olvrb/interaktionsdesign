<!--<script setup lang="ts"> 
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import ImageBox from "./components/ImageBox.vue";
import ImageViewer from "./components/ImageViewer.vue";
</script> -->

<!-- <template>
  <HelloWorld msg="Nyhetssida" />
  <ImageViewer />
</template>-->

<template>
	<main>
		<h1>Vue Popups</h1>
		<button @click="() => TogglePopup('buttonTrigger')">Open Popup</button>
		
		<popup
			v-if="popupTriggers.buttonTrigger" 
			:TogglePopup="() => TogglePopup('buttonTrigger')">
			
		</popup>
    <!--<popup2
      v-if="popupTriggers.buttonTrigger" 
			:TogglePopup="() => TogglePopup('buttonTrigger')">
      <h2>My Button Popup2 the lower</h2>
    </popup2>-->
	</main>
</template>

<script>
import { ref } from 'vue';
import popup from './components/ViewImage/Popup.vue';
export default {
  components: { popup },
	setup () {
		const popupTriggers = ref({
			buttonTrigger: false
		});
		const TogglePopup = (trigger) => {
			popupTriggers.value[trigger] = !popupTriggers.value[trigger]
      
		}
		
		return {
			popup,
			popupTriggers,
			TogglePopup
		}
	}
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>