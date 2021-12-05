import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import LogIn          from './components/LogIn.vue'
import SignUp         from './components/SignUp.vue'
import Account        from './components/Account.vue'
import Stock          from './components/Stock.vue'
import OrderForm      from './components/OrderForm.vue'
import OrdersHistory  from './components/OrdersHistory.vue'

const routes = [
  {
    path:     '/',
    name:     'root',
    component: App
  },

  {
    path:     '/user/login',
    name:     'logIn',
    component: LogIn
  },

  {
    path:     '/user/signup',
    name:     'signUp',
    component: SignUp
  },

  {
    path:     '/user/account',
    name:     'account',
    component: Account
  },

  {
    path:     '/user/orderForm',
    name:     'orderForm',
    component: OrderForm
  },

  {
    path:     '/user/stock',
    name:     'stock',
    component: Stock
  },

  {
    path:     '/user/ordershistory',
    name:     'ordersHistory',
    component: OrdersHistory
  }


];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
