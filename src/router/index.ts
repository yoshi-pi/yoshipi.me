import { createRouter, createWebHistory } from 'vue-router'
import { onTriggerScroll } from './utils'

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
    {
      path: '/:lang?/courses',
      name: 'courses',
      component: () => import('../views/CoursesView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      onTriggerScroll(() => {
        if (savedPosition) {
          resolve(savedPosition)
        } else {
          resolve({ top: 0 })
        }
      })
    })
  },
})

export default router
