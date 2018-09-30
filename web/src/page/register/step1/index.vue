<template>
  <div>
    <v-register-head :step="1"></v-register-head>
    <div>
      <div class="step_more">
       <div class="step_chunk">
          <div class="text-center">
            <h2>注册帐号</h2>
            <p style="color: #666666; margin-bottom: 20px;">* 每一个手机号码仅能生成一个帐号</p>
            <br/>
          </div>
          <div class="" style="position: relative;">
            <div style="position: relative;width: 440px;margin: 0 auto;">
              <div class="jg">
                <small>作为登录帐号，请填写未被其他人或企业注册的手机号码</small>
                <label>手机号码：&#12288;&#12288;</label>
                <input type="text" class="form-control input-w-250" v-model="params.cellphone" val-required/>
              </div>
              <div class="jg">
                <small>不能使用特殊字符，长度在8-10之间</small>
                <label>输入密码：&#12288;&#12288;</label>
                <input type="password" class="form-control input-w-250" v-model="params.password" val-required/>
              </div>
              <div class="jg">
                <small>请再次输入密码</small>
                <label>确认密码：&#12288;&#12288;</label>
                <input type="password" class="form-control input-w-250" v-model="params.repassword" val-required/>
              </div>
              <div>
                <label>验 证 码：&#12288;&#12288;</label>
                <input type="text" class="form-control input-w-175 " style="margin-left: 6px; margin-right: 15px;" v-model="params.code" val-required/>
                <button class="btn btn-verification-code" style="height: 35px;"  @click="getCode" :disabled="show">{{count}}</button>
              </div>
           </div>
          </div>
          <div class="text-center">
            <div class="checkbox">
              <label>
                <input type="checkbox" id="blankCheckbox" value="option1" aria-label="..." v-model="agree">
                <label style="line-height: 20px">我同意并遵守<a>《CPS申报服务处公共业务平台服务协议》</a></label>
              </label>
            </div>
            <br/>
            <button type="button" class="btn btn-success" style="height: 35px;" @click="submit" :disabled="isShowSubmit">注册</button>
            <br/>
            <br/>
            <label style="letter-spacing: 1px;">已有申报服务处公共业务平台帐号? <router-link to="/login">立即登录</router-link></label>
          </div>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
import { getValidatecode } from '@/config/api/base-api'
import { postOrganiz, testProxy } from '@/config/api/declare-api'
import { validate } from '@/config/validator'
import { setCookie } from '@/config/cookie'

export default {
  name: 'step1',
  data () {
    return {
      params: {
        cellphone: '',
        password: '',
        repassword: '',
        code: ''
      },
      show: false,
      count: '获取验证码',
      timer: null,
      isShowSubmit: false,
      agree: false
    }
  },
  components: {
    'v-register-head': () => import('@/components/header/register')
  },
  methods: {
    getCode () {
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = true
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count -= 1
          } else {
            this.count = '获取验证码'
            this.show = false
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
      getValidatecode('regiset', this.params.cellphone)
    },
    @validate()
    submit () {
      this.isShowSubmit = true
      postOrganiz(this.params).then((d) => {
        setCookie('sb_token', d.token, 1000 * 60)
        window.sessionStorage.setItem('username', d.username)
        this.$router.push('/step11')
      }).catch(() => {
        this.isShowSubmit = false
      })
    }
  },
  mounted () {
    testProxy()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
