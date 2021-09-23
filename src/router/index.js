import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/busquedas',
        name: 'Busquedas',
        component: () =>
            import ( /* webpackChunkName: "busqueda" */ '../views/Busqueda.vue')
    },
    {
        path: '/ventas',
        name: 'Ventas',
        component: () =>
            import ( /* webpackChunkName: "ventas" */ '../views/Ventas.vue')
    },
    {
        path: '/total',
        name: 'Total',
        component: () =>
            import ( /* webpackChunkName: "total" */ '../views/Total.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router