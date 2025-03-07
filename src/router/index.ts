import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:lang?',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      beforeEnter(to) {
        if (to.params.lang === 'ja' || to.params.lang === 'en' || to.params.lang === '') {
          return
        } else {
          return {
            name: 'home',
            params: { lang: 'en' },
          }
        }
      },
    },
  ],
})

export default router
