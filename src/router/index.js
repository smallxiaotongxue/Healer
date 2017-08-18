import Vue from 'vue'
import Router from 'vue-router'

//引入单页组件
import index from '@/pages/index'
import signin from '@/pages/signin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    }
  ]
})
