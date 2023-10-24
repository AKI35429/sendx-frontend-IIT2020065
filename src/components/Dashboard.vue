<template class="bg-white">
    <nav class="bg-white border-gray-200 dark:bg-slate-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Type</span>

            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                <ul class="flex">
                    <!-- flex flex-col font-medium p-1 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-400 dark:border-gray-700 -->

                    <li class="px-2 bg-transparent text-blue-600  " aria-current="page">Type</li>

                    <!-- block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 -->

                    <ion-icon name="chevron-forward-outline"></ion-icon>

                    <li class="px-2" aria-current="page">Design</li>

                    <!-- block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 -->

                    <ion-icon name="chevron-forward-outline"></ion-icon>

                    <li class="px-2" aria-current="page">Content</li>

                    <!-- block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 -->

                    <ion-icon name="chevron-forward-outline"></ion-icon>

                    <li class="px-2" aria-current="page">Behaviour</li>

                    <!-- block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 -->

                    <ion-icon name="chevron-forward-outline"></ion-icon>

                    <li class="px-2" aria-current="page">Success</li>

                    <!-- block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 -->
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
// import Type from './Form/Type.vue';
</script>

<style scoped>
ion-icon {
    /* color: white; */
    --ionicon-stroke-width: 55px;
    font-size: 20px;
    padding-top: 4px;
}
</style>
