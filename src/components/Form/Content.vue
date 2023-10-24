<template>
  <nav class=" ">
        <div class="flex flex-wrap justify-end">
          <div class="flex flex-row">
      <div class="p-2">
        <router-link to="/Design"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
        Back
          </router-link>
      </div>

      <div class="p-2">
        <router-link to="/Target"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none  bg-green-600 hover:bg-green-700 focus:ring-green-300">
        Save & Continue
          </router-link>
      </div>
    </div>
        </div>
    </nav>
  <div id="editor" style="height:700px; width:1500px"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isUnlayerLoaded = ref(false);

onMounted(() => {
  // Check if the Unlayer script has been loaded
  if (typeof unlayer !== 'undefined') {
    // Initialize the Unlayer editor
    unlayer.init({
      id: 'editor',
      projectId: 192471,
    });
    isUnlayerLoaded.value = true;
  }
});
</script>

<style scoped>
/* Your component-specific styles here */
</style>
