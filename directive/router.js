const{createRouter, createWebHistory} = VueRouter;

import ifs from './if.js';
import events from './event.js';
import posts from './post.js';

const routes = [
    {path:'/if', component: ifs},
    {path: '/event', component: events},
    {path: '/post', component: posts},

]

const router = createRouter({
    history: createWebHistory(),
    routes : routes
})

export default router;