import Vue from 'vue'
import Router from 'vue-router'

//引入单页组件
import index from '@/pages/index'
import signin from '@/pages/signin'
import signup from '@/pages/signup'
import forgetPassword from '@/pages/forgetPassword'
import inputName from '@/pages/personMessage/inputName'
import inputBirthday from '@/pages/personMessage/inputBirthday'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{  path: '/',name: 'index',component: index},
    { path: '/signin',name: 'signin',component: signin},
    { path: '/signup',name: 'signiup',component: signup},
    { path: '/forgetPassword',name: 'forgetPassword',component: forgetPassword},
    { path: '/personMessage/inputName',name: 'inputName',component: inputName},
    { path: '/personMessage/inputBirthday',name: 'inputBirthday',component: inputBirthday},
	]
})
