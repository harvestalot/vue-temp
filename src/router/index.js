import Vue from "vue"
import VueRouter from "vue-router"
import { isMobile } from "../utils"

import store from "../store/index.js"

import Index from '../views/index.vue'
import MobileHome from '../views/M/index.vue';
// import Header from '../components/Header/index.vue'
// import Footer from '../components/Footer/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/',
      redirect:'/login',
      name:'Index',
      component: Index,
      meta: {
        title: '首页',
        requireAuth: true,
      },
      // components: {
      //   default: Index,
      //   mainheader: Header,
      //   mainfooter: Footer

      // },
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
        },
      ]
    },
    {
      path:'/login',
      name:'Login',
      component: () => import('@/views/Login/index.vue'),
      meta: {
        title: '登录',
        requireAuth: false,
      },
    },
    {
      path: '/m',
      name: 'm.Home',
      component: MobileHome
    },
    {
      path:'*',
      name:'404',
      component: () => import('@/views/404.vue')
    }
  ],
});
router.beforeEach((to, from, next) => {
  const { name, params, query } = to;
  if (isMobile()) {
    if (!name.startsWith('m.')) {
      next({ name: `m.${name}`, params, query });
    }
  } else if (name.startsWith('m.')) {
    next({ name: name.substr(2), params, query });
  }
  if(to.matched.some(res => res.meta.requireAuth)){
    const { token } = store.state;
    if(token){
      next();
    }else{
      next({path: '/login', query:{ redirect: to.fullPath }});
    }
  }else{
    next()
  }
})

export default router