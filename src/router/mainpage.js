const routes = [
    {
        path: '/main/about_me',
        component: () => import(/* webpackChunkName: "Main" */ '@/views/Main/AboutMeSection.vue'),
        meta: { title: 'About Me'}
    },
    {
        path: '/main/skill',
        component: () => import(/* webpackChunkName: "Main" */ '@/views/Main/SkillSection.vue'),
        meta: { title: 'Skill'}
    },
    {
        path: '/main/project',
        component: () => import(/* webpackChunkName: "Main" */ '@/views/Main/ProjectSection.vue'),
        meta: { title: 'Project'}
    }
]
export default routes;