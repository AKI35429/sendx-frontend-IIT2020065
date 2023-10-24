<template>
  <form
    action=""
    class="m-8 flex flex-col place-items-center gap-y-8 border-gray-300 bg-white text-black"
  >
    <div>
      <div>
        <h6 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
          How often to show the popup ?
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
            id="Advanced-option-1"
            type="radio"
            name="Advanced"
            value="pageview"
            class="w-4 h-4"
            checked
          />

          <label for="Advanced-option-1" class="block ml-2 text-sm font-medium">
            Every page view
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="Advanced-option-2"
            type="radio"
            name="Advanced"
            value="browser"
            class="w-4 h-4"
          />

          <label for="Advanced-option-2" class="block ml-2 text-sm font-medium">
            Every new browser session
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="Advanced-option-3"
            type="radio"
            name="Advanced"
            value="afterdays"
            class="w-4 h-4 "
          />

          <label
            for="Advanced-option-3"
            class="flex ml-2 text-sm font-medium gap-2"
          >
            After
            <input
              type="number"
              id="Advanced-seconds"
              class="bg-gray-100 border border-gray-400 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 w-20 h-5 p-2 my-1"
              placeholder=""
              required
            />
            days
          </label>
        </div>
      </fieldset>
    </div>
    <div>
      <div>
        <h6 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
          When to stop showing the popup ?
        </h6>
        <p class="mb-3 font-normal text-gray-500"></p>
      </div>

      <fieldset>
        <legend class="sr-only"></legend>

        <div class="flex items-center mb-4">
          <input
            id="Advancedpart-option-1"
            type="radio"
            name="Advancedpart"
            value="never"
            class="w-4 h-4 "
            checked
          />

          <label for="Advancedpart-option-1" class="block ml-2 text-sm font-medium">
            Never
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="Advancedpart-option-2"
            type="radio"
            name="Advancedpart"
            value="visitor"
            class="w-4 h-4 "
          />

          <label for="Advancedpart-option-2" class="block ml-2 text-sm font-medium">
            If the visitor has successfully completed the action.
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="Advancedpart-option-3"
            type="radio"
            name="Advancedpart"
            value="popup"
            class="w-4 h-4 "
          />

          <label
            for="Advancedpart-option-3"
            class="flex ml-2 text-sm font-medium gap-2"
          >
            If the visitor has successfully completed the action or the pop-up
            has been shown
            <input
              type="number"
              id="Advancedpart-seconds"
              class="bg-gray-100 border border-gray-400 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 w-20 h-5 p-2 my-1"
              placeholder=""
              required
            />
            times.
          </label>
        </div>
      </fieldset>
    </div>
  </form>
</template>

<script setup></script>

<style scoped></style>
