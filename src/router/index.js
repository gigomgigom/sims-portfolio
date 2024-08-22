import { createRouter, createWebHistory } from 'vue-router';
import mainpage from './mainpage';
import article from './article';
import Aos from 'aos';

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
    redirect: '/article/list',
    children: [
      ...article
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  Aos.init();
  next();
})
export default router
