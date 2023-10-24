<template class="bg-white">
    <nav class="border-gray-200 bg-slate-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-black" >{{$route.name}}</span>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul class="flex gap-1.5">
            <li :class="{ 'px-2 bg-transparent text-blue-600': $route.name === 'Type' }" aria-current="page">
              Type
            </li>
            <ion-icon name="chevron-forward-outline"></ion-icon>
            <li :class="{ 'px-2 bg-transparent text-blue-600': $route.name === 'Design' }" aria-current="page">Design</li>
            <ion-icon name="chevron-forward-outline"></ion-icon>
            <li :class="{ 'px-2 bg-transparent text-blue-600': $route.name === 'Content' }" aria-current="page">Content</li>
            <ion-icon name="chevron-forward-outline"></ion-icon>
            <li :class="{ 'px-2 bg-transparent text-blue-600': $route.name === 'Target' }" aria-current="page">Targeting</li>
            <ion-icon name="chevron-forward-outline"></ion-icon>
            <li :class="{ 'px-2 bg-transparent text-blue-600': $route.name === 'Behavior' }" aria-current="page">Behaviour</li>
            <ion-icon name="chevron-forward-outline"></ion-icon>
            <li :class="{ 'px-2 bg-transparent text-blue-600': $route.name === 'Success' }" aria-current="page">Success</li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  

<script setup>
</script>

<style scoped>
ion-icon {
    --ionicon-stroke-width: 55px;
    font-size: 20px;
    padding-top: 4px;
}
</style>
