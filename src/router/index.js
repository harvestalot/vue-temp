import Vue from "vue"
import VueRouter from "vue-router"
import { isMobile, isRouterPermission } from "../utils"

import store from "../store/index.js"

import Index from '../views/index.vue'
import MobileHome from '../views/M/index.vue';
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/',
      redirect:'/login',
      name:'Index',
      // component: Index,
      meta: {
        title: '首页',
        requireAuth: true,
      },
      components: {
        default: Index,
        mainheader: Header,
        mainfooter: Footer
      },
      children:[
        {
          path:'home',
          name:'Home',
          component: () => import('@/views/Home/index.vue'),
        },
        {
          path:'list',
          name:'List',
          component: () => import('@/views/List/index.vue'),
          meta:{
            title:'运营操作者页面',
            roles:['operation'],
          }
        },
        {
          path:'user-center',
          name:'UserCenter',
          redirect:'/user-center/auth',
          component: () => import('@/views/UserCenter/index.vue'),
          children:[
            {
              path:'auth',
              name:'UserCenter.Auth',
              component: () => import('@/views/UserCenter/Auth/index.vue'),
              meta:{
                title:'admin权限页面',
                roles:['admin'],
              }
            }
          ],
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
    const { token } = store.state.user;
    const losToken = localStorage.getItem('token'),
      username = localStorage.getItem('username'),
      roles = localStorage.getItem('roles');
    if(token && losToken){
      if(to.meta.roles){
        const flag = isRouterPermission(to.meta.roles, [roles]);
        if(flag){
          next();
        }else{
          next({path: '/login', query:{ redirect: to.fullPath }});
        }
      }else{
        next();
      }
    }else if(losToken){
      store.commit('user/set_token', losToken);
      store.commit('user/set_username', { username, roles});
      next();
    }else{
      next({path: '/login', query:{ redirect: to.fullPath }});
    }
  }else{
    next()
  }
})

export default router