import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'
import Category from './views/Category.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/category',
        name: 'category',
        component: Category
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
  ]
})
