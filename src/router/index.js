import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/flex_container/flex-direction",
        name: "flex-direction",
        component: () => import("../views/flex_container/flex-direction.vue")
    },
    {
        path: "/flex_container/flex-wrap",
        name: "flex-wrap",
        component: () => import("../views/flex_container/flex-wrap.vue")
    },
    {
        path: "/flex_container/justify-content",
        name: "justify-content",
        component: () => import("../views/flex_container/justify-content.vue")
    },
    {
        path: "/flex_container/align-items",
        name: "align-items",
        component: () => import("../views/flex_container/align-items.vue")
    },
    {
        path: "/flex_container/align-content",
        name: "align-content",
        component: () => import("../views/flex_container/align-content.vue")
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router
