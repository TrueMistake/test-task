import Home from "@/page/Home";
import Favorites from "@/page/Favorites";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/favorites',
        name: "Favorites",
        component: Favorites
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
