import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import AboutView from '../views/AboutView'
import WorksView from '../views/WorksView'
import ReviewView from '../views/ReviewView'
import ArticlesView from '../views/ArticlesView'
import ContactsView from '../views/ContactsView'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/About',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/Works',
    name: 'WorksView',
    component: WorksView
  },
  {
    path: '/Review',
    name: 'ReviewView',
    component: ReviewView
  },
  {
    path: '/Articles',
    name: 'ArticlesView',
    component: ArticlesView
  },
  {
    path: '/Contacts',
    name: 'ContactsView',
    component: ContactsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  base: process.env.BASE_URL // Установка базового пути из окружения
});


export default router