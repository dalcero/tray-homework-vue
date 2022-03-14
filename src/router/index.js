import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Sellers from '@/views/Sellers/Sellers.vue'
import CreateSeller from '@/views/Sellers/CreateSeller.vue'
import Sales from '@/views/Sales/Sales.vue'
import CreateSale from '@/views/Sales/CreateSale.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/sellers',
    name: 'sellers.index',
    component: Sellers,
  }, {
    path: '/sellers/create',
    name: 'sellers.create',
    component: CreateSeller,
  }, {
    path: '/sellers/:id/sales',
    name: 'sellers.sales',
    component: Sales,
    props: true
  }, {
    path: '/sales/create',
    name: 'sales.create',
    component: CreateSale,
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
