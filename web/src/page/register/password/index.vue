<template>
  <div>
    <v-password-head></v-password-head>
    <div>
      <div class="step_more">
       <div class="step_chunk">
          <div class="text-center">
            <h2>忘记密码</h2>
            <p style="color: #666666 margin-bottom: 20px">* 每一个手机号码仅能生成一个帐号</p>
            <br/>
          </div>
          <div style="position: relative">
            <div style="position: relative;width: 440px;margin: 0 auto;">
              <div class="jg">
                <small>作为登录帐号，请填写未被其他人或企业注册的手机号码</small>
                <label>手机号码：&#12288;&#12288;</label>
                <input type="text" class="form-control input-w-250" v-model="params.cellphone" val-required/>
              </div>
              <div class="jg">
                <small>不能使用特殊字符，长度在8-10之间</small>
                <label>输入密码：&#12288;&#12288;</label>
                <input type="password" class="form-control input-w-250" v-model="params.newPassword" val-required/>
              </div>
              <div class="jg">
                <small>请再次输入密码</small>
                <label>确认密码：&#12288;&#12288;</label>
                <input type="password" class="form-control input-w-250" v-model="params.confirmPassword" val-required/>
              </div>
              <div class="jg">
                <label>验 证 码：&#12288;&#12288;</label>
                <input type="text" class="form-control input-w-175 " style="margin-left: 6px" v-model="params.code" val-required/>
                <button class="btn btn-verification-code" style="height: 35px" @click="getCode" :disabled="show">{{count}}</button>
              </div>
         </div>
          </div>
          <div class="text-center">
            <button type="button" class="btn btn-success" style="height: 35px" @click="submit" :disabled="isShowSubmit">提交</button>
            <br/>
            <br/>
            <label>已有申报服务处公共业务平台帐号? <router-link to="/login">立即登录</router-link></label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getValidatecode } from '@/config/api/base-api'
import { putPassword } from '@/config/api/declare-api'
import { validate } from '@/config/validator'

export default {
  name: 'resetPw',
  data () {
    return {
      params: {
        cellphone: '',
        newPassword: '',
        confirmPassword: '',
        code: ''
      },
      show: false,
      count: '获取验证码',
      timer: null,
      isShowSubmit: false
    }
  },
  components: {
    'v-password-head': () => import('@/components/header/password')
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
      getValidatecode('find', this.params.cellphone)
    },
    @validate()
    submit () {
      this.isShowSubmit = true
      putPassword(this.params).then(() => {
        this.$router.push('/password/reset/msg')
      }).catch(() => { this.isShowSubmit = false })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
