import { createRouter, createWebHistory } from 'vue-router'
import HomeCreate from '@/views/HomeCreate.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeCreate,
    },
  ],
})

export default router
