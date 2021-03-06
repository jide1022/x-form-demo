import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import('@/views/Home/Home.vue');

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
