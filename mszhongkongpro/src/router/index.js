import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // 登录
      path: '/login',
      name: '登录',
      component: require('../views/login/login.vue').default,
    },
    {
      // 主页
      path: '/home',
      name: '空白主页',
      component: require('../views/index/index.vue').default,
      // 含有文件夹的文件children
      children: [
        {
          // 账户管理->账户列表
          path: '/userManagement/userList',
          name: '账户列表',
          component: require('../views/userManagement/userList.vue').default,
        },
        {
          // 账户详情
          path: '/details/userDetail',
          name: '账户详情',
          component: require('../views/details/userDetail.vue').default,
        },
        {
          // 申请管理->申请列表
          path: '/applyManagement/applyList',
          name: '申请列表',
          component: require('../views/applyManagement/applyList.vue').default,
        },
        {
          // 申请详情
          path: '/details/applyDetail',
          name: '申请详情',
          component: require('../views/details/applyDetail.vue').default,
        },
        {
          // 贷后管理->贷后列表
          path: '/loanManagement/loanList',
          name: '贷后列表',
          component: require('../views/loanManagement/loanList.vue').default,
        },
        {
          // 贷后详情
          path: '/details/loanDetail',
          name: '贷后详情',
          component: require('../views/details/loanDetail.vue').default,
        },
      ]
    }]
})
