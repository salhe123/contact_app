import { createRouter, createWebHistory } from "vue-router";
import login from './components/login_sign/login.vue';
import signup from './components/login_sign/signup.vue';

const routes=[
    {
        path:'/login',
        name:'login',
        component:login

    },
    {
        path:'/signup',
        name:'signup',
        component:signup

    }
];
const router=createRouter(
    {
        history:createWebHistory(),
        routes
    }
);
export default router