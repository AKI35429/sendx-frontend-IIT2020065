import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Type from '../components/Form/Type.vue'
import Design from '../components/Form/Design.vue'
import Content from '../components/Form/Content.vue'
import Target from '../components/Form/Target.vue'
import Behaviour from '../components/Form/Behaviour.vue'
import Advanced from '../components/Form/Advanced.vue'
import Success from '../components/Form/Success.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Type',
      component: Type,
    },
    {
      path: '/Design',
      name: 'Design',
      component: Design,
    },
    {
      path: '/Content',
      name: 'Content',
      component: Content,
    },
    {
      path: '/Target',
      name: 'Target',
      component: Target,
    },
    {
      path: '/Behaviour',
      name: 'Behavior',
      component: Behaviour,
    },
    {
      path: '/Advanced',
      name: 'Advanced',
      component: Advanced,
    },
    {
      path: '/Success',
      name: 'Success',
      component: Success,
    },
  ],
});

export default router;
