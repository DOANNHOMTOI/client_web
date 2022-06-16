import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ListShop from "../pages/ListShop";
import ListShopNew from "../pages/ListShopNew";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Checkout from "../pages/CheckOut";
import DetailShop from "../pages/DetailShop";
import CheckOutNew from "../pages/CheckOutNew";
import Cart from "../components/Cart";
import Page500 from "../pages/Page500";
import TermsOfUse from "../pages/TermsOfUse";
import Policy from "../pages/Policy";
import OrderSuccess from "../components/OrderSuccess";
import OrderFail from "../components/OrderFail";

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
      path: '/shops/:location',
      name: 'ListShop',
      component: ListShopNew
    },
    {
      path: '/shop-detail',
      name: 'ShoDetailShopp',
      component: DetailShop
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: CheckOutNew
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/terms-of-use',
      name: 'TermsOfUse',
      component: TermsOfUse
    },
    {
      path: '/policy',
      name: 'Policy',
      component: Policy
    },
    {
      path: '/checkout-success',
      name: 'OrderSuccess',
      component: OrderSuccess
    },
    {
      path: '/checkout-cancel',
      name: 'OrderFail',
      component: OrderFail
    },
    {
      path: '/error-page',
      name: 'Page500',
      component: Page500
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
