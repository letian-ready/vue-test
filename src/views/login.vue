<template>
  <div>
    <button @click="login" v-if="!isLogin">登录</button>
    <button @click="logout" v-else>注销</button>
  </div>
</template>

<script>
export default {
name: "login",
  methods: {
  login() {
    window.isLogin = true;

    // 动态添加路由
    this.$router.addRoutes([
      {
        path: '/admin',
        name: 'admin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
        // 嵌套
        children: [
            {
            path: '/admin/course/:name',
            name: 'detail',
            component: () => import('../views/Detail.vue')
            }
        ],
        meta: {
          auth: true
        },
      },
    ]);

    this.$router.push(this.$route.query.redirect);
  },
  logout() {
    window.isLogin = false
    this.router.push('/')
    }
  },
  computed: {
    isLogin() {
      return window.isLogin
    }
  }
}
</script>

<style scoped>

</style>