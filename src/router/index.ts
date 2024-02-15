import HomeViewVue from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:  HomeViewVue
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contactme',
      name: 'contactme',
      component:()=>import ('../views/ContactView.vue')
    }, 
    {
      path: '/bindings',
      name: 'bindings',
      component:()=>import ('../views/BindingsView.vue')
    }, 
  ]
})

export default router
