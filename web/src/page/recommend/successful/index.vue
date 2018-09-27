
<template>
  <div class="content">
    <div class="content_con">
      <div style="width: 100%;height: 300px;text-align: center;">
        <img :src="correct" style="width: 64px;height: 64px;margin: 180px auto 0;">
      </div>
      <div class="money center">申请补贴成功</div>
      <div class="mx center">申请补贴审核时长1-5个工作日，请注意短信或平台消息</div>
      <router-link to="/recommend/apply_subsidy">
        <div class="but center">返回</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import correct from '@/assets/img/correct_img.png'

export default {
  name: 'successful',
  data () {
    return {
      lists: [],
      correct
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
