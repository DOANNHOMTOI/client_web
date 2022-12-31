import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Checkout from "../pages/CheckOut";
import DetailShop from "../pages/DetailShop";
import Cart from "../components/Cart";
import CallBack from "../pages/CallBack";
import ForgetPassword from "../pages/ForgetPassword";


Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/product/:id',
      name: 'ShoDetailShopp',
      component: DetailShop
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/callback-momo',
      name: 'callback',
      component:CallBack
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component:ForgetPassword
    }

  ]
})
