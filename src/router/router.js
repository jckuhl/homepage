import VueRouter from 'vue-router'
import Vue from 'vue';
import Home from './../components/Home.vue';
import Reddit from './../components/Reddit.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            alias: '/home',
            component: Home,
        },
        {
            path: '/reddit',
            name: 'reddit',
            component: Reddit
        }
    ]
});