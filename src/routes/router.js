import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/portfolio.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/portfolio'
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Home,
        }
    ]
});

export default router;