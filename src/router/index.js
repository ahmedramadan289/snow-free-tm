import Vue from "vue";
import VueRouter from "vue-router";
import Contact from "@/views/Contact.vue";
import Portfolio from "@/views/Portfolio.vue";
import Blog from "@/views/Blog.vue";
import Wordpress from "@/views/Wordpress.vue";


Vue.use(VueRouter);

const routes = [


    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },
    {
        path: "/portfolio",
        name: "Portfolio",
        component: Portfolio
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog

    },
    {
        path: "/wordpress",
        name: "Wordpress",
        component: Wordpress

    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;