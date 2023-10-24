<template>
  <form
    action=""
    class="m-8 flex flex-col place-items-center gap-y-8 border-gray-300 bg-white text-black"
  >
    <div>
      <h6 class="mb-2 text-xl font-bold tracking-normal text-gray-900 gap-1">
        What happens after displaying success screen ?
      </h6>
      <p class="mb-3 font-normal text-gray-500">
        This is the screen visitors see after sucessfully submitting your form.
      </p>
    </div>
    <fieldset>
      <legend class="sr-only"></legend>
      <div class="flex items-center mb-4">
        <input
          id="success-option-1"
          type="radio"
          name="Success"
          value="nothing"
          class="w-4 h-4"
          checked
        />
        <label for="success-option-1" class="block ml-2 text-sm font-medium">
          Do nothing
        </label>
      </div>
      <div class="flex items-center mb-4">
        <input
          id="success-option-2"
          type="radio"
          name="Success"
          value="Close"
          class="w-4 h-4"
        />

        <label
          for="success-option-2"
          class="flex ml-2 text-sm font-medium gap-x-2"
        >
          Close pop up after
          <input
            type="number"
            id="success-seconds"
            class="bg-gray-100 border border-gray-400 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 w-20 h-5 p-2 my-1"
            placeholder=""
            required
          />
          second/s.
        </label>
      </div>
      <div class="flex items-center mb-4">
        <input
          id="success-option-3"
          type="radio"
          name="Success"
          value="Redirect"
          class="w-4 h-4"
        />

        <label for="success-option-3" class="block ml-2 text-sm font-medium">
          Redirect to URL
        </label>
      </div>
    </fieldset>
    <div class="flex flex-row">
      <div class="p-5">
        <RouterLink to="/Behaviour"
          
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Back
        </RouterLink>
      </div>

      <div class="p-5">
        <RouterLink to="/"
          
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none  bg-green-600 hover:bg-green-700 focus:ring-green-300"
        >
          Submit
        </RouterLink>
      </div>
    </div>
  </form>
</template>

<script setup></script>

<style scoped></style>
