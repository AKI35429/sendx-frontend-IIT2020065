<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="https://www.sendx.io/" class="flex items-center">
        <img
        src="../assets/logo.jpeg"
          class="h-8 mr-3"
          alt="Sendx Logo"
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
        class="flex flex-row font-medium p-4 md:p-0 space-x-8 "
      >
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page"
            >Dashboard</a
          >
        </li>
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 rounded text-white md:p-0 hover:bg-transparent hover:text-blue-500"
            >Campaigns</a
          >
        </li>
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 rounded text-white md:p-0 hover:bg-transparent hover:text-blue-500"
            >Audience </a
          >
        </li>
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 rounded text-white md:p-0 hover:bg-transparent hover:text-blue-500"
            >Automations</a
          >
        </li>
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 rounded text-white md:p-0 hover:bg-transparent hover:text-blue-500"
            >Contact</a
          >
        </li>
      </ul>
    </div>
    
      <div class="flex items-center order-2 p-0.5 rounded-lg flex-row space-x-8 bg-gray-900">
      <a href=""><ion-icon name="add-outline" class="icon-hover"></ion-icon></a>
      <a href=""><ion-icon name="search-outline" class="icon-hover"></ion-icon></a>
      <a href=""><ion-icon name="notifications-outline" class="icon-hover"></ion-icon></a>
      <a href=""><ion-icon name="grid-outline" class="icon-hover"></ion-icon></a>
      <a href=""><ion-icon name="apps-outline" class="icon-hover"></ion-icon></a>
      <a href=""><img
            class="w-8 h-8 rounded-2xl"
            src="../assets/profile.jpeg"
            alt="user photo"/></a>
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
</script>
