<template>
  <div class="ms-36 me-32 flex-row py-20">
    <form class="flex items-center">
      <label for="simple-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
            />
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          class="bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
          placeholder="Search design..."
          required
        />
      </div>
      <button
        type="submit"
        class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-600 rounded-lg border border-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        <svg
          class="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span class="sr-only">Search</span>
      </button>
    </form>
  </div>

  <div >
    <RouterLink to="/Content" class="relative ms-36 flex flex-wrap items-center gap-20">
    <div
      v-for="template in templateData"
      :key="template.id"
      class="relative flex w-fit max-w-[22rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
    >
      <div
        class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
      >
        <img :src="template.imageUrl" alt="" />
      </div>
      <div class="p-4">
        <div class="mb-3 flex items-center justify-between">
          <h5
            class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased"
          >
            {{ template.title }}
          </h5>
        </div>
      </div>
    </div>
  </RouterLink>
  </div>
  <br><br>
</template>

<script setup>
import template1 from "@/assets/templates/template1.png";
import template2 from "@/assets/templates/template2.png";
import template3 from "@/assets/templates/template3.png";
import template4 from "@/assets/templates/template4.png";
import template5 from "@/assets/templates/template5.png";
import template6 from "@/assets/templates/template6.png";
import template7 from "@/assets/templates/template7.png";
import template8 from "@/assets/templates/template8.png";
import template9 from "@/assets/templates/template9.png";
import template10 from "@/assets/templates/template10.png";
const templateData = [
  {
    id: 1,
    title: "Intro bar",
    imageUrl: template1,
  },
  {
    id: 2,
    title: "Modal Background Classic",
    imageUrl: template2,
  },
  {
    id: 3,
    title: "Modal Left Image Modern",
    imageUrl: template3,
  },
  {
    id: 4,
    title: "Page Takeover Modern",
    imageUrl: template4,
  },
  {
    id: 5,
    title: "Model",
    imageUrl: template5,
  },
  {
    id: 6,
    title: "Letter",
    imageUrl: template6,
  },{
    id: 7,
    title: "Retro",
    imageUrl: template7,
  },{
    id: 8,
    title: "Modern Background Model",
    imageUrl: template8,
  },{
    id: 9,
    title: "Slider Modern",
    imageUrl: template9,
  },
  {
    id: 10,
    title: "Slider",
    imageUrl: template10,
  },
  // Add more template data as needed
];
</script>



<!-- <script>
const templates = importImages(require.context("@/assets/templates", false, /\.png$/));
const templateData = templates.map((template, index) => ({
  id: index + 1,
  title: `Template ${index + 1}`,
  imageUrl: template,
}));

function importImages(context) {
  const keys = context.keys();
  return keys.map(context);
}
</script> -->

<style scoped></style>




