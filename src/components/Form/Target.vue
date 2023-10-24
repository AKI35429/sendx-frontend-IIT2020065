<template>
    <form
    action=""
    class="m-8 flex flex-col place-items-center gap-y-8 border-gray-300 bg-white text-black"
  >
    <div>
      <h6 class="mb-2 text-xl font-bold tracking-normal text-gray-900 gap-1">
        Who are the targeted audience ?
      </h6>
      <p class="mb-3 font-normal text-gray-500">
        To whom you want your content to reach to.
      </p>
    </div>
    <fieldset>
      <legend class="sr-only"></legend>
      <div class="flex items-center mb-4">
        <input
          id="target-option-1"
          type="radio"
          name="Target"
          value="Students"
          class="w-4 h-4"
          checked
        />
        <label for="target-option-1" class="block ml-2 text-sm font-medium">
          Students
        </label>
      </div>
      <div class="flex items-center mb-4">
        <input
          id="target-option-2"
          type="radio"
          name="Target"
          value="Business"
          class="w-4 h-4"
        />

        <label
          for="target-option-2"
          class="flex ml-2 text-sm font-medium gap-x-2"
        >
          Business
        </label>
      </div>
      <div class="flex items-center mb-4">
        <input
          id="target-option-3"
          type="radio"
          name="Target"
          value="Companies"
          class="w-4 h-4"
        />

        <label for="target-option-3" class="block ml-2 text-sm font-medium">
          Co-orporate Companies
        </label>
      </div>
    </fieldset>
    <div class="flex flex-row">
      <div class="p-5">
        <RouterLink to="/Content"
          
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Back
        </RouterLink>
      </div>

      <div class="p-5">
        <RouterLink to="/Behaviour"
         
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none  bg-green-600 hover:bg-green-700 focus:ring-green-300"
        >
          Continue
        </RouterLink>
      </div>
    </div>
    </form>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>