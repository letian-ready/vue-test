import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
  //   // 嵌套
  //   children: [
  //       {
  //       path: '/admin/course/:name',
  //       name: 'detail',
  //       component: () => import('../views/Detail.vue')
  //       }
  //   ],
  //   meta: {
  //     auth: true
  //   },
  //   // beforeEnter(to, from, next){
  //   // // 是否登录
  //   //   if (window.isLogin) {
  //   //     next()
  //   //   } else {
  //   //     next('/login?redirect='+to.fullPath)
  //   //   }
  //   // }
  // },
  {
    path: '/course/:name',
    component: () => import('../views/Detail.vue')
  },
  {
  // 会匹配所有路径
    path: '*',
    component: () => import('../views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局守卫
// router.beforeEach((to, from, next) => {
//   // 判断路由是否需要守卫
//   // meta数据
//   if (to.meta.auth){
//     // 是否登录
//     if (window.isLogin) {
//       next()
//     } else {
//       next('/login?redirect='+to.fullPath)
//     }
//   } else {
//       next()
// }
// })

router.beforeEach((to, from, next) => {
  // 判断逻辑
  // 是否登录
    if (store.state.user.isLogin) {
      // 去登录页
      if (to.path === '/login') {
        next('/')
      } else {
        next()
      }
    } else {
      // 没有登录
      if (to.path === '/login') {
        next()
      } else{
        next('/login?redirect='+to.fullPath)
      }
    }
})

export default router
