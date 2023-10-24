<template>
  
    <Navigation/>
    <Dashboard/>
    <Type/>
    <Design/>
    <!-- <Content/> -->
<RouterView/>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Navigation from "./components/Navigation.vue";
import Dashboard from './components/Dashboard.vue';
import Content from './components/Form/Content.vue';
import Type from './components/Form/Type.vue';
import Design from './components/Form/Design.vue';
</script>

<style lang="scss" scoped>

</style>

<!-- <template>
<div>
  <Navigation/>
  <RouterView/
</div>
</template>

<script>
import { RouterView } from 'vue-router';
import Dashboard from './components/Dashboard.vue';
export default {
    data() {
        return {
            title: 'Vue.js SPA Example',
            currentPage: 'home',
        };
    },
    components: { RouterView }
};
</script>

<style>/* Add your CSS styles here */</style> -->
