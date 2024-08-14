import { createRouter, createWebHistory } from 'vue-router';
import mainpage from './mainpage';

const routes = [
  {
    path: '',
    redirect: '/main/about_me'
  },
  //MainPage
  {
    path: '/main',
    component: () => import(/* webpackChunkName: "Main" */ '@/views/Main'),
    redirect: '/main/about_me',
    children: [
      ...mainpage
    ]
  },
  //Article
  {
    path: '/article',
    component: () => import(/* webpackChunkName: "Article" */ '@/views/Article'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
