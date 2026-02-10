import { createRouter, createWebHistory } from 'vue-router'
import AnimalList from '@/views/AnimalList.vue'
import CreationCard from '@/views/CreationCard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AnimalList,
    },
    {
      path: '/cards',
      name: 'home',
      component: CreationCard,
    },
  ],
})

export default router
