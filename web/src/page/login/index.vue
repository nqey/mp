<template>
  <div class="outer-container">
    <!-- 波浪特效开始 -->
    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop">
        <div class="wave waveTop" :style="waveTopd"></div>
      </div>
      <div class="waveWrapperInner bgMiddle">
        <div class="wave waveMiddle" :style="waveMiddled"></div>
      </div>
      <div class="waveWrapperInner bgBottom">
        <div class="wave waveBottom" :style="waveBottomd"></div>
      </div>
    </div>
    <!-- 波浪特效结束 -->
    <div class="container relative">
      <div class="row header">
        <div class="col-6 logo">
          <img :src="logo"/>
          <h2>CPS 申报服务处</h2>
          <p>
              申报服务处是中国商品诚信数据库授权设立的项目申报服务处，隶属于中国商品诚信数据库服务中心，针对性的服务申报企业入库，管理该服务处申报官工作；依法筛选和推荐符合标准的生产企业，使其获得中国商品诚信数据库项目扶持资金补贴，须忠实执行中国商品诚信数据库的筛选标准、全心全意为消费者服务。
          </p>
          <br/>
          <br/>
          <router-link to="/step1"><button class="btn">立即申请</button></router-link>
        </div>
        <div class="col-6">
          <div class="login">
            <h3 class="title text-center">CPS公共业务自主管理平台</h3>
            <ul>
              <li>
                <input class="input" name="username" type="text" placeholder="请输入帐号" title="用户名"  v-model="form.username" val-required>
              </li>
              <li>
                <input class="input" name="form.password" type="password" placeholder="请输入密码" title="密码" v-model="form.password" val-required>
              </li>
              <li>
                <ul class="logo_yzm">
                  <li>
                    <input class="input" type="text" name="checknumber" placeholder="请输入验证码"  v-model="form.checknumber">
                  </li>
                  <li class="verifycode-wrapper">
                    <img id="imgVerify" :src="verificationCode" alt="点击更换验证码" width="112" height="45" @click="verificationCodeFn">
                  </li>
                </ul>
              </li>
            </ul>
            <div class="col-6 text-center checkbox">
              <label>
                <input type="checkbox">记住帐号
              </label>
            </div>
            <div class="col-6 text-center account">
              <router-link to="/password/reset"><span>忘记密码？</span></router-link>
            </div>
            <div id="login_btn_wraper">
              <button id="submit-login" class="btn js-ajax-submit" @click="login">登录</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row announcement">
        <div class="col-2">
          <span class="glyphicon glyphicon-volume-up pull-left" style=""></span> 系统公告
        </div>
        <router-link :to="'/sys/msg/detail/'+sysMsgId" class="col-8" style="color:#464646;">{{sysMsgTitle}}</router-link>
        <router-link to="/sys/msg/list" class="col-2 text-right" style="color: #01c853;">更多<span class="glyphicon glyphicon-menu-right" style="font-size: 12px;"></span></router-link>
      </div>
      <div class="row">
        <div class="col-4 see-detail">
          <div class="logo sbxt">
            <img :src="sbxt"/>
          </div>
          <h4>申报官</h4>
          <p>申报官是中国商品诚信数据库授权依法筛选和推荐符合标准的生产企业，使其获得中国商品诚信数据库项目扶持资金补贴的申报人员，隶属于各申报机构，协助企业完善申报材料，须忠实执行中国商品诚信数据库的筛选标准，全心全意为消费者服务。</p>
          <router-link to="/agency/1"><button class="btn ckxq">查看详情</button></router-link>
        </div>
        <div class="col-4 see-detail">
          <div class="logo sjglzx">
            <img :src="sjglzx"/>
          </div>
          <h4>申报服务处</h4>
          <p>申报机构是中国商品诚信数据库授权设立的项目申报机构，隶属于中国商品诚信数据库服务中心，针对性的服务申报企业入库，管理该机构申报官工作；依法筛选和推荐符合标准的生产企业，使其获得中国商品诚信数据库项目扶持资金补贴，须忠实执行中国商品诚信数据库的筛选标准、全心全意为消费者服务。</p>
          <router-link to="/agency/2"><button class="btn ckxq">查看详情</button></router-link>
        </div>
        <div class="col-4 see-detail">
          <div class="logo ssjglzx">
            <img :src="ssjglzx"/>
          </div>
          <h4>省级服务中心</h4>
          <p>省级服务中心是中国商品诚信数据库授权设立的项目省级服务机构，隶属于中国商品诚信数据库服务中心，针对性服务该省申报企业，管理和监督该省市级管理中心、认证官工作，完善该省服务体系。</p>
          <router-link to="/agency/3"><button class="btn ckxq">查看详情</button></router-link>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row footer text-center">
        <div class="col-6">
          <a>关于我们</a>
          <a>服务协议</a>
          <a>联系我们</a>
          <a>官网网站</a>
          <a>企业入库</a>
          <a href="https://www.wnbiaodan.com/f/tDYSrb" target="_blank">申请报告</a>
        </div>
        <div class="col-6">
          <small>版权所有 @中国商品诚信数据库技术服务中心 ALL Rights Reserved 蜀ICP备16015082号-2 </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sbxt from '@/assets/img/sbxt.png'
import sjglzx from '@/assets/img/sjglzx.png'
import ssjglzx from '@/assets/img/ssjglzx.png'
import waveTop from '@/assets/login/wave-top.png'
import waveMiddle from '@/assets/login/wave-mid.png'
import waveBottom from '@/assets/login/wave-bot.png'
import logo from '@/assets/logo/logo.png'
import { VERIFICATION_CODE, DOMAIN, getNoticesNewest } from '@/config/api/base-api'
import { doLogin } from '@/config/api/declare-api'
import { validate } from '@/config/validator'
import { setCookie } from '@/config/cookie'

export default {
  name: 'login',
  data () {
    return {
      sbxt,
      sjglzx,
      ssjglzx,
      waveTopd: {
        backgroundImage: `url(${waveTop})`
      },
      waveMiddled: {
        backgroundImage: `url(${waveMiddle})`
      },
      waveBottomd: {
        backgroundImage: `url(${waveBottom})`
      },
      logo,
      verificationCode: `${VERIFICATION_CODE}?t=${new Date().getTime()}&domain=${DOMAIN}`,
      form: {
        username: '',
        password: '',
        checknumber: ''
      },
      sysMsgTitle: '',
      sysMsgId: ''
    }
  },
  computed: {},
  methods: {
    verificationCodeFn () {
      this.verificationCode = `${VERIFICATION_CODE}?t=${new Date().getTime()}&domain=${DOMAIN}`
    },
    init () {
      // 获取最新公告
      this.form.username = window.sessionStorage.getItem('username')
      getNoticesNewest().then((d) => {
        this.sysMsgId = d.id
        this.sysMsgTitle = d.title
      })
    },
    @validate()
    login () {
      // 审核流程
      const router = {
        'baseWaitSubmit': '/step2/1',
        'baseWaitPending': '/step3',
        'baseWaitAudit': '/step3',
        'baseWaitPended': '/step3',
        'baseWaitUnPending': '/step2/2',
        'baseUnPass': '/step2/2',
        'registWaitSubmit': '/step4/1',
        'registWaitAudit': '/step5',
        'registWaitPended': '/step5',
        'registWaitPending': '/step5',
        'registUnPass': '/step4/2',
        'registWaitUnPending': '/step4/2',
        'default': '/index'
      }
      doLogin(this.form)
        .then((d) => {
          window.sessionStorage.setItem('mp-userInfo', d)
          setCookie('sb_token', d.token, 1000 * 60)
          this.$router.push(router[d.state] || router.default)
        })
    }
  },
  watch: {},
  components: {
    'qc-input': () => import('@/components/input')
  },
  beforeCreate () {
  },
  cteated () {
  },
  beforeMount () {
  },
  mounted () {
    this.init()
  },
  beforeUpdate () {
  },
  updated () {
  },
  beforeDestroy () {
  },
  destroyed () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
