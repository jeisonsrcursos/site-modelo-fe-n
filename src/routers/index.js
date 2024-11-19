import Home from "../pages/Home.vue";
import { VueRouter } from "vue-router";

const routers = [
    {
        path: '/home',
        component: Home
    }
];

const router = new VueRouter({
    routers
});


