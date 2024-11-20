import Home from "../pages/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Sobre from "../pages/Sobre.vue";
import Contato from "../pages/Contato.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/sobre',
        component: Sobre
    },
    {
        path: '/contato',
        component: Contato
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;

