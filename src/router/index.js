import Vue from 'vue'
import VueRouter from 'vue-router'
//解决避免对当前位置的冗余导航问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    children: [{
        path: "/home",
        name: "Home",
        component: () => import('@/views/home/home')
      },
      {
        path: "/goods",
        name: "Goods",
        component: () => import('@/views/shop/goods')
      },
      {
        path: "/category",
        name: "Category",
        component: () => import('@/views/shop/category')
      },
      {
        path: "/order",
        name: "Order",
        component: () => import('@/views/order/order')
      },
      {
        path: "/user",
        name: "User",
        component: () => import('@/views/user/user')
      },
      {
        path: "/shopdetail",
        name: "Shopdetail",
        component: () => import('@/views/shop/shopdetail')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router