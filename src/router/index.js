import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Shop from '@/components/pages/Shop'
import Blog from '@/components/pages/Blog'
import Contact from '@/components/pages/Contact'
import User from '@/components/pages/User'
import CheckOut from '@/components/pages/CheckOut'
import ShopingCart from '@/components/pages/ShopingCart'
import BlogDetail from '@/components/pages/BlogDetail'
import ProductDetail from '@/components/pages/ProductDetail'
import TestPhanTrang from '@/components/pages/TestPhanTrang'
import Product from '@/components/admin/ProductList'
import ProductInfo from '@/components/admin/ProductInfo'
import CreateProduct from '@/components/admin/CreateProduct'
import Login from '@/components/admin/Login'
import Register from '@/components/admin/register'
import Dashboard from '@/components/admin/Dashboard'

Vue.use(Router)

function guest(to, from, next) {
  if (localStorage.activeUser) {
    var activeUsers = document.getElementById("App")
    activeUsers.classList.add('user')
    
    next({ name: "Dashboard" });
  } else next();
}

function guard(to, from, next) {
  if (localStorage.activeUser) {
    var activeUsers = document.getElementById("App")
    activeUsers.classList.add('user')
    next();
  } else next({ name: "Login" });
}


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, 
    {
      path: '/admin/product',
      name: 'Product',
      component: Product
    }, 
    {
      path: '/admin/product/edit/:id',
      name: 'ProductEdit',
      component: ProductInfo
    }, 
    {
      path: '/admin/product/productInfo',
      name: 'ProductInfo',
      component: ProductInfo
    }, 
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }, 
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }, 
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }, 
    {
      path: '/checkOut',
      name: 'CheckOut',
      component: CheckOut
    }, 
    {
      path: '/shoping-cart',
      name: 'ShopingCart',
      component: ShopingCart
    }, 
    {
      path: '/blogDetail',
      name: 'BlogDetail',
      component: BlogDetail
    }, 
    {
      path: '/:projectId/details',
      name: 'details',
      component: ProductDetail,
      props: true
    }, 
    {
      path: '/testPhanTrang',
      name: 'TestPhanTrang',
      component: TestPhanTrang
    }, 
    {
      path: '/admin/createProduct',
      name: 'CreateProduct',
      component: CreateProduct
    }, 
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      beforeEnter: guard,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      beforeEnter: guest,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      beforeEnter: guest,
    },
  ],
})