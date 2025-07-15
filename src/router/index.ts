import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('@/views/Signup.vue'),
    },
    {
      path: '/booking/:id',
      name: 'Booking',
      component: () => import('@/views/Booking/Booking.vue'),
      children: [
        { path: '', component: () => import('@/views/Booking/Services.vue') },
        {
          path: 'services',
          name: 'Services',
          component: () => import('@/views/Booking/Services.vue'),
        },
        {
          path: 'personal-info',
          name: 'PersonalInfo',
          component: () => import('@/views/Booking/PersonalInfo.vue'),
        },
        {
          path: 'confirm',
          name: 'Confirm',
          component: () => import('@/views/Booking/Confirm.vue'),
        },
      ],
    },
  ],
})

export default router
