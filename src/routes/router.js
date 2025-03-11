import { createWebHistory, createRouter } from "vue-router";
import Portfolio from '../views/Portfolio.vue';

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/portfolio'
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio,
        }
    ]
});

export default router;