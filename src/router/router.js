import { createRouter, createWebHistory } from 'vue-router' 
import HomePage from '@/pages/home.vue';
import AboutPage from '@/pages/about.vue';
import ContactPage from '@/pages/contact.vue';
import errorPage from '@/pages/404.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage,
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactPage,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'errorPage',
        component: errorPage,
    }
],
})

