<template>
  <form
    action=""
    class="m-8 flex flex-col place-items-center gap-y-8 border-gray-300 bg-white text-black"
  >
    <div>
      <div>
        <h6 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
          Show the popup when visitor ?
        </h6>
        <p class="mb-3 font-normal text-gray-500">
          Set the period when you want to show the popup to the same visitor if
          they didn't subscribe.
        </p>
      </div>

      <fieldset>
        <legend class="sr-only"></legend>

        <div class="flex items-center mb-4">
          <input
        id="business-option-1"
            type="radio"
            name="business"
            value="enters"
            class="w-4 h-4 "
            checked
          />

          <label for="business-option-1" class="block ml-2 text-sm font-medium">
            Enters website
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="business-option-2"
            type="radio"
            name="business"
            value="exists"
            class="w-4 h-4 "
          />

          <label for="business-option-2" class="block ml-2 text-sm font-medium">
            exits website
          </label>
        </div>
        <div class="flex items-center mb-4">
          <input
            id="business-option-3"
            type="radio"
            name="business"
            value="on"
            class="w-4 h-4 "
          />

          <label
            for="business-option-3"
            class="flex ml-2 text-sm font-medium gap-2"
          >
            on
            <input
              type="number"
              id="business-seconds"
              class="bg-gray-100 border border-gray-400 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 w-20 h-5 p-2 my-1"
              placeholder=""
              required
            />
            page scroll
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="business-option-4"
            type="radio"
            name="business"
            value="Redirect"
            class="w-4 h-4 "
          />

          <label
            for="business-option-4"
            class="flex ml-2 text-sm font-medium gap-2"
          >
            After
            <input
              type="number"
              id="business-seconds"
              class="bg-gray-100 border border-gray-400 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 w-20 h-5 p-2 my-1"
              placeholder=""
              required
            />
            second/s on website.
          </label>
        </div>
      </fieldset>
    </div>
    <div class="p-5 font-semibold " @click="toggleAdvanced" :class="advancedClass">
      Advanced <ion-icon :name="advancedIcon" style="padding-top: 3px;"></ion-icon>
    </div>

    <Advanced v-if="showAdvanced" />
    <div class="flex flex-row">
      <div class="p-5">
        <RouterLink to="/Target"
          
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Back
        </RouterLink>
      </div>

      <div class="p-5">
        <RouterLink to="/Success"
          
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-green-600 hover:bg-green-700 focus:ring-green-300"
        >
          Continue
        </RouterLink>
      </div>
    </div>
  </form>
</template>

<script setup>
import Advanced from './Advanced.vue';
import { ref, computed } from 'vue';

const showAdvanced = ref(false);

const toggleAdvanced = () => {
  showAdvanced.value = !showAdvanced.value;
};

const advancedIcon = computed(() => {
  return showAdvanced.value ? 'chevron-up-outline' : 'chevron-down-outline';
});

const advancedClass = computed(() => {
  return showAdvanced.value ? 'text-blue-600' : 'text-black';
});
</script>


<style scoped>

</style>
