import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import login from '@/page/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/agency/:type',
      name: 'agency',
      component: r => require.ensure([], (require) => { r(require('@/page/agency')) }, 'agency'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/password/reset',
      name: 'resetPw',
      component: r => require.ensure([], (require) => { r(require('@/page/register/password')) }, 'resetPw'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/password/reset/msg',
      name: 'resetPwMsg',
      component: r => require.ensure([], (require) => { r(require('@/page/register/message')) }, 'resetPwMsg'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/step1',
      name: 'step1',
      component: r => require.ensure([], (require) => { r(require('@/page/register/step1')) }, 'step1'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/step11',
      name: 'step11',
      component: r => require.ensure([], (require) => { r(require('@/page/register/step1_1')) }, 'step11'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/step2/:type',
      name: 'step2',
      component: r => require.ensure([], (require) => { r(require('@/page/register/step2')) }, 'step2'),
      meta: {
        keepAlive: false
      }
    }
    // {
    //   path: '/step3',
    //   name: 'step3',
    //   component: r => require.ensure([], (require) => { r(require('@/page/register/step3')) }, 'step3'),
    //   meta: {
    //     keepAlive: false
    //   }
    // },
    // {
    //   path: '/step4/:type',
    //   name: 'step4',
    //   component: r => require.ensure([], (require) => { r(require('@/page/register/step4')) }, 'step4'),
    //   meta: {
    //     keepAlive: false
    //   }
    // },
    // {
    //   path: '/step5',
    //   name: 'step5',
    //   component: r => require.ensure([], (require) => { r(require('@/page/register/step5')) }, 'step5'),
    //   meta: {
    //     keepAlive: false
    //   }
    // }
    // {
    //   path: '/password/reset/msg',
    //   name: 'resetPwMsg',
    //   component: r => require.ensure([], (require) => { r(require('@/page/register/resetPwMsg')); }, 'resetPwMsg'),
    //   meta: {
    //     keepAlive: false
    //   }
    // }
  ]
})
