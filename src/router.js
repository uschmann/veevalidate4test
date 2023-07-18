import {createRouter, createWebHashHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import MoreDialog from "@/views/MoreDialog.vue";
import UserView from "@/views/UserView.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
            children: [
                {
                    path: 'more',
                    name: 'about.more',
                    component: MoreDialog,
                }
            ]
        },
        {
            path: '/user',
            name: 'user',
            component: UserView
        },
    ]
});