import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.  
    component: () => import(/* webpackChunkName: "About" */ '../views/AboutView.vue')
  },
  {
    path: '/offers',
    name: 'Offers',
    component: () => import(/* webpackChunkName: "Offers" */ '../views/OffersView.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
