import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth/',
    component: () => import('@/views/layouts/Authentication'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/components/Auth/Login')
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/components/Auth/Register')
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/views/layouts/Application'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/components/App/Dashboard')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About')
      },
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
