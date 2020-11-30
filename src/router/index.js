import Vue from "vue"
import VueRouter from "vue-router"

import Index from '../views/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/',
      redirect:'/login',
      name:'Index',
      component: Index,
      children:[
        {
          path:'home',
          name:'Home',
          component: () => import('@/views/Home/index.vue')
        },
        {
          path:'list',
          name:'List',
          component: () => import('@/views/List/index.vue')
        }
      ]
    },
    {
      path:'/login',
      name:'Login',
      component: () => import('@/views/Login/index.vue')
    }
  ],
});

export default router