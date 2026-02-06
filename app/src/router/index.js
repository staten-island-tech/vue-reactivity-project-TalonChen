import { createRouter, createWebHistory } from 'vue-router'
import MusicCreate from `@/views/MusicCreate.vue`
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MusicCreate,
    },
  ],
})

export default router
