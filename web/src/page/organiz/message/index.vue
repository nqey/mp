<template>
  <div>
    <div class="col-12 step_head">
      <router-link to="/login"><img :src="logo" class="step_title_logo"/></router-link>
      <h3 class="step_title">CPS 申报服务处自主管理平台</h3>
    </div>
    <div class="index_more">
      <div class="index_chunk">
       <div class="step_chunk">
          <div class="text-center step_zccg">
          <div>
            <img :src="sh"/>
          </div>
          <br/>
          <br/>
          <h4>信息审核中...</h4>
          <br/>
          <br/>
          <p style="font-size:16px; line-height: 35px;">审核时间大概在1-2个工作日，请耐心等待。等待过程中你可以登录账号查看审核结果</p>
          <p style="margin-bottom: 80px; font-size:16px;line-height: 35px;">审核最终结果也会以短信方式发送至您注册的手机号码中，请留意查阅。</p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import sh from '@/assets/img/sh2.png'
import logo from '@/assets/img/logo.png'

export default {
  name: 'demo',
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
      sh,
      logo
    }
  },
  computed: {},
  methods: {},
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
