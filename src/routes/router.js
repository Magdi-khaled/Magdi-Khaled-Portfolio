import { createWebHistory, createRouter } from "vue-router";
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView,
        }
    ]
});

export default router;