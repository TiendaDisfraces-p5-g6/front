import { createRouter, createWebHistory } from "vue-router";
import App                                from './App.vue';
import Alquilados                         from "./components/Alquiler.vue"
import LogIn                              from './components/LogIn.vue'
import SignUp                             from './components/SignUp.vue'
import Home                               from './components/Home.vue'
import Pedidos                            from './components/pedidos.vue'
import User                               from './components/Usuario.vue' 


const routes = [
  
    {
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/user/logIn',
        name: "logIn",
        component: LogIn
    },
    {
        path: '/user/signUp',
        name: "signUp",
        component: SignUp
    },
    {
        path: '/user/home',
        name: "home",
        component: Home
    },
    {
        path: '/user/pedidos',
        name: "Pedidos",
        component: Pedidos
    },
    {
        path:'/user/alquilados',
        name:"alquilados",
        component: Alquilados
    },
    {
        path:'/user/Data',
        name:"Usuario",
        component:User
    }



    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;