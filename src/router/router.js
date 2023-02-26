//Todas las rutas y paginas de mi aplicacion
import {createRouter, createWebHashHistory} from 'vue-router'

//Carga perezosa donde se trae bajo demanda
const routes = [
    {path: '/', component: () => import(/* webpackChunkName: "Inicio" */ '@/pages/Inicio.vue')},
    {path: '/buscar/:idCliente', component: () => import(/* webpackChunkName: "Buscar" */ '@/pages/Buscar.vue')},
    {path: '/actualizar', component: () => import(/* webpackChunkName: "Actualizar" */ '@/pages/Actualizar.vue')},
    {path: '/eliminar', component: () => import(/* webpackChunkName: "Eliminar" */ '@/pages/Eliminar.vue')},
    {path: '/insertar', component: () => import(/* webpackChunkName: "Insertar" */ '@/pages/Insertar.vue')},
    {path: '/:pathMatch(.*)*', component: () => import(/* webpackChunkName: "NoFound" */ '@/pages/NoFound.vue')},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router



















