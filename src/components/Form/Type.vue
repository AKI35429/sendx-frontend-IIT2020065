<template>
  <div class="ms-32 me-32 flex items-center py-10 gap-1">
    <div class="mb-2 text-3xl font-bold tracking-tight text-gray-900">
      <h5>Select form type</h5>
      <p class="mb-3 font-normal text-xl gap-2 text-gray-400">
        What kind of form would you like to create?
      </p>
    </div>
    <div class="ms-36 items-center flex">
      <div
        class="flex flex-col text-left max-w-sm  border rounded-lg shadow bg-gray-800 border-gray-700">
        <a href="#">
          <img class="rounded-xl p-5" src="../../assets/form_black.png" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
              Embeded Form
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-400">
            Create a form to embed on your website.
          </p>
          <router-link to="/Design"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800">
            Create
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </router-link>
        </div>
      </div>
      <div
        class="mx-20 my-12 flex flex-col text-left max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
        <a href="#">
          <img class="rounded-xl p-5" src="../../assets/landing_black.png" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
              Landing Page
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-400">
            Create a landing page with a form.
          </p>
          <router-link to="/Design"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800">
            Create
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </router-link>
        </div>
      </div>
      <div
        class="flex flex-col text-left max-w-sm  border rounded-lg shadow bg-gray-800 border-gray-700">
        <a href="#">
          <img class="rounded-xl p-5" src="../../assets/popup_black.png" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
              Popup Form
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-400">
            Add a form that pops up as a box.
          </p>
          <router-link to="/Design"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800">
            Create
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
</script>
  
<style scoped></style>
  