//Todas las rutas y paginas de mi aplicacion
import {createRouter, createWebHashHistory} from 'vue-router'

//Carga perezosa donde se trae bajo demanda
const routes = [
    {
        path: '/',
        name: 'inicio',
        component: () => import(/* webpackChunkName: "Inicio" */ '@/pages/Inicio.vue')},
    {
        path: '/buscar/:idCliente',
        name: 'buscar',
        component: () => import(/* webpackChunkName: "Buscar" */ '@/pages/Buscar.vue')
    },
    {
        path: '/actualizar',
        name: 'actualizar',
        component: () => import(/* webpackChunkName: "Actualizar" */ '@/pages/Actualizar.vue')
    },
    {
        path: '/eliminar',
        name: 'eliminar',
        component: () => import(/* webpackChunkName: "Eliminar" */ '@/pages/Eliminar.vue')
    },
    {
        path: '/insertar',
        name: 'insertar',
        component: () => import(/* webpackChunkName: "Insertar" */ '@/pages/Insertar.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import(/* webpackChunkName: "NoFound" */ '@/pages/NoFound.vue')
    },
    {
        path: '/negado',
        name: '403',
        component: () => import(/* webpackChunkName: "Negado" */ '@/pages/Negado.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

//GUARDIAN
router.beforeEach((to, from, next) => {
    console.log({to, from, next})
    const random = Math.random() * 10
    if (random > 5) {
        console.log('Autorizado')
        next()
    } else {
        console.log('No Autorizado')
        next({name: '403'})
    }
    //para darle el paso al recuro que quiero
    // next()
})

export default router



















