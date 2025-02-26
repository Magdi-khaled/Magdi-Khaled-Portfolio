import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/portfolio/home'
        },
        {
            path: '/portfolio/home',
            name: 'Home',
            component: Home,
        }
    ]
});

export default router;