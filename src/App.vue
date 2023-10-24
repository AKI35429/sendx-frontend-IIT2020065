<template>
    <Navigation/>
    <Dashboard/>
    <!-- <appPost/> -->
    <!-- <Type/> -->
    <!-- <Design/> -->
    <!-- <Success/> -->
    <!-- <Advanced/> -->
    <!-- <Behaviour/> -->
    <!-- <Content/> -->
    <!-- <Target/> -->
    <RouterView/>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
import Dashboard from './components/Dashboard.vue';
import Content from './components/Form/Content.vue';
import Type from './components/Form/Type.vue';
import Design from './components/Form/Design.vue';
import Success from './components/Form/Success.vue';
import Advanced from './components/Form/Advanced.vue';
import Behaviour from './components/Form/Behaviour.vue';
import Target from './components/Form/Target.vue';
import appPost from './components/Form/appPost.vue';
// export default{
//     components:{
//         Navigation,
//         Dashboard,
//         Content,
//         Type,
//         Design,
//         Success,
//         Advanced,
//         Behaviour,
//         Target,
//         Post
//     },
// };
</script>

<style scoped>

</style>
