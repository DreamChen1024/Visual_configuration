import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      name: 'main',
      meta: {
        title: '可视化组件配置'
      },
      component: () => import('./views/Main/main.vue')
    },
  ]
})