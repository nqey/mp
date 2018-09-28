<template>
  <div class="contact">
    <div class="izlrmenu" :style="consults">
      <a class="consult" :style="consults" target="_blank">
        <div class="phones" style="display:none;">400-8822-011</div>
      </a>
      <a class="cart" :style="consults">
        <div class="pic" :style="pics"></div>
      </a>
    </div>
    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=229307241&site=qq&menu=yes" id="udesk-feedback-tab" class="tableft" :style="consults" style="display: block; background-color: black;"></a>
  </div>
</template>

<script>
import consult from '@/assets/img/consult_icon.gif'
import pic from '@/assets/img/wx.jpg'

export default {
  name: 'contact',
  data () {
    return {
      consults: {
        backgroundImage: `url(${consult})`
      },
      pics: {
        backgroundImage: `url(${pic})`
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
