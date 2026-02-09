import { createRouter, createWebHistory } from 'vue-router'
import AnimalList from '@/views/AnimalList.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AnimalList,
    },
  ],
})

export default router
