import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Revision from '../views/Revision.vue'
import Login from '../views/Login.vue'
import Edition from '../views/Edition.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Início',
    component: Home
  },
  {
    path: '/revisao',
    name: 'Revision',
    component: Revision
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/edicao',
    name: 'Edicao',
    component: Edition
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
