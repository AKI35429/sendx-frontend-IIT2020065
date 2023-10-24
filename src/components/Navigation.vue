<template>
  <!-- <header class="sticky top-0 shadow-lg">
    <nav
      class="bg-black"
    >
          src="https://flowbite.com/docs/images/logo.svg"

      <a>Dashboard</a>
      <a>Campaigns <ion-icon name="chevron-down-outline"></ion-icon></a>
      <a>Audience <ion-icon name="chevron-down-outline"></ion-icon></a>
      <a>Automations <ion-icon name="chevron-down-outline"></ion-icon></a>
      <div>
      <ion-icon name="add-outline"></ion-icon>
      <ion-icon name="search-outline"></ion-icon>
      <ion-icon name="notifications-outline"></ion-icon>
      <ion-icon name="grid-outline"></ion-icon>
      <ion-icon name="apps-outline"></ion-icon>
      <img src="../assets/profile.jpeg" alt="My Image" />
    </div>
    </nav>
  </header> -->
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="https://flowbite.com/" class="flex items-center">
        <img
        src="../assets/logo.jpeg"
          class="h-8 mr-3"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Sendx</span
        >
      </a>
      <div
      class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-user"
    >
      <ul
        class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <li>
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page"
            >Dashboard</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >Campaigns</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >Audience </a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >Automations</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >Contact</a
          >
        </li>
      </ul>
    </div>
    
      <div class="flex items-center md:order-2 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <a href=""><ion-icon name="add-outline" class="icon-hover"></ion-icon></a>
      <a href=""><ion-icon name="search-outline" class="icon-hover"></ion-icon></a>
      <a href=""><ion-icon name="notifications-outline" class="icon-hover"></ion-icon></a>
      <a href=""><ion-icon name="grid-outline" class="icon-hover"></ion-icon></a>
      <a href=""><ion-icon name="apps-outline" class="icon-hover"></ion-icon></a>
      <a href=""><img
            class="w-8 h-8 rounded-2xl"
            src="../assets/profile.jpeg"
            alt="user photo"
          /></a>
      <!-- <img src="../assets/profile.jpeg" alt="My Image" /> -->
    </div>
    </div>
  </nav>
</template>

<style scoped>
ion-icon {
        color: white;
        --ionicon-stroke-width: 55px;
        font-size: 20px;
        padding-top: 2px;
      }
.icon-hover:hover {
  
  color: rgb(29 78 216);
}
</style>

<script setup>

//   import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
//   import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

//   const navigation = [
//     { name: 'Dashboard', href: '#', current: true },
//     { name: 'Team', href: '#', current: false },
//     { name: 'Projects', href: '#', current: false },
//     { name: 'Calendar', href: '#', current: false },
//   ]
</script>
