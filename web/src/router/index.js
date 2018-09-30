import Vue from 'vue'
import Router from 'vue-router'
import { getCookie } from '@/config/cookie'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: r => require.ensure([], (require) => { r(require('@/page/index')) }, 'index'),
      meta: {
        keepAlive: false,
        menu: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: r => require.ensure([], (require) => { r(require('@/page/login')) }, 'login'),
      meta: {
        keepAlive: false,
        menu: false
      }
    },
    {
      path: '/agency/:type',
      name: 'agency',
      component: r => require.ensure([], (require) => { r(require('@/page/agency')) }, 'agency'),
      meta: {
        keepAlive: false,
        menu: false
      }
    },
    {
      path: '/password/reset',
      name: 'resetPw',
      component: r => require.ensure([], (require) => { r(require('@/page/register/password')) }, 'resetPw'),
      meta: {
        keepAlive: false,
        menu: false
      }
    },
    {
      path: '/password/reset/msg',
      name: 'resetPwMsg',
      component: r => require.ensure([], (require) => { r(require('@/page/register/message')) }, 'resetPwMsg'),
      meta: {
        keepAlive: false,
        menu: false
      }
    },
    {
      path: '/step1',
      name: 'step1',
      component: r => require.ensure([], (require) => { r(require('@/page/register/step1')) }, 'step1'),
      meta: {
        keepAlive: false,
        menu: false
      }
    },
    {
      path: '/step11',
      name: 'step11',
      component: r => require.ensure([], (require) => { r(require('@/page/register/step1_1')) }, 'step11'),
      meta: {
        keepAlive: false,
        menu: false
      }
    },
    {
      path: '/step2/:type',
      name: 'step2',
      component: r => require.ensure([], (require) => { r(require('@/page/register/step2')) }, 'step2'),
      meta: {
        keepAlive: false,
        menu: false
      }
    },
    {
      path: '/step3',
      name: 'step3',
      component: r => require.ensure([], (require) => { r(require('@/page/register/step3')) }, 'step3'),
      meta: {
        keepAlive: false,
        menu: false
      }
    },
    {
      path: '/step4/:type',
      name: 'step4',
      component: r => require.ensure([], (require) => { r(require('@/page/register/step4')) }, 'step4'),
      meta: {
        keepAlive: false,
        menu: false
      }
    },
    {
      path: '/step5',
      name: 'step5',
      component: r => require.ensure([], (require) => { r(require('@/page/register/step5')) }, 'step5'),
      meta: {
        keepAlive: false,
        menu: false
      }
    },
    {
      path: '/recommend/list',
      name: 'recommendlist',
      component: r => require.ensure([], (require) => { r(require('@/page/recommend/list')) }, 'recommendlist'),
      meta: {
        keepAlive: false,
        menu: true
      }
    },
    {
      path: '/recommend/record',
      name: 'recommendRecord',
      component: r => require.ensure([], (require) => { r(require('@/page/recommend/record')) }, 'recommendRecord'),
      meta: {
        keepAlive: false,
        menu: true
      }
    },
    {
      path: '/recommend/apply',
      name: 'apply',
      component: r => require.ensure([], require => r(require('@/page/recommend/apply')), 'apply'),
      meta: {
        keepAlive: false,
        menu: true
      }
    },
    {
      path: '/recommend/detail',
      name: 'recommendDetail',
      component: r => require.ensure([], require => r(require('@/page/recommend/detail')), 'recommendDetail'),
      meta: {
        keepAlive: false,
        menu: true
      }
    },
    { // 企业管理---工厂 新增 9-21 zsp
      path: '/factory/list',
      name: 'factoryList',
      component: r => require.ensure([], require => r(require('@/page/company/factory')), 'factoryList'),
      meta: {
        keepAlive: false,
        menu: true
      }
    },
    { // 企业管理---商品列表
      path: '/goods/list',
      name: 'goodslist',
      component: r => require.ensure([], require => r(require('@/page/company/goods')), 'goodslist'),
      meta: {
        keepAlive: false,
        menu: true
      }
    },
    { // 企业管理---经销商
      path: '/franchiser/list',
      name: 'franchiserList',
      component: r => require.ensure([], require => r(require('@/page/company/franchiser')), 'franchiserList'),
      meta: {
        keepAlive: false,
        menu: true
      }
    },
    { // 企业管理---二维码管理路由路径
      path: '/code/list',
      name: 'codeList',
      component: r => require.ensure([], require => r(require('@/page/company/code')), 'codeList'),
      meta: {
        keepAlive: false,
        menu: true
      }
    },
    { // 企业申报管理---企业申报 9-25 zsp
      path: '/decEnt/entry',
      name: 'decEnt',
      component: r => require.ensure([], (require) => { r(require('@/page/enterprise')) }, 'decEnt'),
      meta: {
        keepAlive: false,
        menu: true
      }
    },
    { // ---企业列表
      path: '/ent/list',
      name: 'entList',
      component: r => require.ensure([], (require) => { r(require('@/page/enterprise/list')) }, 'entList'),
      meta: {
        keepAlive: false,
        menu: true
      }
    },
    { // ---申报服务处
      path: '/ent/agency',
      name: 'declarerAgency',
      component: r => require.ensure([], require => r(require('@/page/declarer/agency')), 'declarerAgency'),
      meta: {
        keepAlive: false,
        menu: true
      }
    },
    { // ---申报官列表
      path: '/ent/officer',
      name: 'declarerOfficer',
      component: r => require.ensure([], require => r(require('@/page/declarer/officer')), 'declarerOfficer'),
      meta: {
        keepAlive: false,
        menu: true
      }
    },
    { // 申报管理---企业列表===详情 9-26 zsp
      path: '/organiz/enterprise/:id',
      name: 'entListdetail',
      component: r => require.ensure([], (require) => { r(require('@/page/enterprise/detail')) }, 'entListdetail'),
      meta: {
        keepAlive: false,
        menu: true
      }
    },
    { // 申报管理---企业列表===详情 9-26 zsp
      path: '/message',
      name: 'message',
      component: r => require.ensure([], (require) => { r(require('@/page/message')) }, 'message'),
      meta: {
        keepAlive: false,
        menu: true
      }
    },
    { // ---申报官列表===详情 9-26 zsp
      path: '/ent/officer/view/:id',
      name: 'declarerOfficerView',
      component: r => require.ensure([], require => r(require('@/page/declarer/officer/view')), 'declarerOfficerView'),
      meta: {
        keepAlive: false,
        menu: true
      }
    },
    { // 省级服务中心---注册 9-27 zsp
      path: '/organiz/provence/signin',
      name: 'organizProvence',
      component: r => require.ensure([], require => r(require('@/page/organiz/provence')), 'organizProvence'),
      meta: {
        keepAlive: false,
        menu: false
      }
    },
    { // 省级服务中心---审核提示 9-28 zsp
      path: '/organiz/provence/message',
      name: 'organizMessage',
      component: r => require.ensure([], require => r(require('@/page/organiz/message')), 'organizMessage'),
      meta: {
        keepAlive: false,
        menu: false
      }
    },
    { // 省级服务中心---修改 9-27 zsp
      path: '/organiz/provence/edit',
      name: 'organizProvenceEdit',
      component: r => require.ensure([], require => r(require('@/page/organiz/provence')), 'organizProvenceEdit'),
      meta: {
        keepAlive: false,
        menu: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLogin = !!getCookie('sb_token')
  if (!to.meta.menu) {
    next()
  } else if (to.path !== '/login' && !isLogin) {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
