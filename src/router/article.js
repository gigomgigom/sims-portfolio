const routes = [
    {
        path: '/article/list',
        component: () => import(/* webpackChunkName: "Article" */ '@/views/Article/ArticleList.vue'),
        meta: { title: "ArticleList"}
    },
    {
        path: '/article/detail',
        component: () => import(/* webpackChunkName: "Article" */ '@/views/Article/ArticleDetail.vue'),
        meta: { title: "ArticleDetail"} 
    }
]

export default routes;