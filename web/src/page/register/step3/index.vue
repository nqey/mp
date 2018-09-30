<template>
  <div>
    <v-register-head :step="3"></v-register-head>
    <div class="step_more">
       <div class="step_chunk">
          <div class="text-center step_zccg">
          <div>
            <img :src="sh"/>
          </div>
          <br/>
          <br/>
          <h4>基本信息审核中...</h4>
          <br/>
          <br/>
          <p style="font-size:16px; line-height: 35px;">审核时间大概在1-2个工作日，请耐心等待。等待过程中你可以登录账号查看审核结果</p>
          <p style="margin-bottom: 80px; font-size:16px;line-height: 35px;">审核最终结果也会以短信方式发送至您注册的手机号码中，请留意查阅。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sh from '@/assets/img/sh2.png'
import registerHead from '@/components/header/register'

export default {
  name: 'step3',
  data () {
    return {
      sh
    }
  },
  components: {
    'v-register-head': registerHead
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
