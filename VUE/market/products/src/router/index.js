import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorView from '../views/ErrorView.vue'
import FruitView from '../views/FruitView.vue'
import MilkView from '../views/MilkView.vue'
import MeatView from '../views/MeatView.vue'
import OthersView from '../views/OthersView.vue'
import DrinkView from '../views/DrinkView.vue'
import AddView from '../views/AddView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/drink',
    name: 'drink',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DrinkView
  },
  {
    path: '/fruit',
    name: 'fruit',
    component: FruitView
  },
  {
    path: '/milk',
    name: 'milk',
    component: MilkView
  },
  {
    path: '/meat',
    name: 'meat',
    component: MeatView
  },
  {
    path: '/others',
    name: 'others',
    component: OthersView
  },
  {
    path: '/add',
    name: 'add',
    component: AddView
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
