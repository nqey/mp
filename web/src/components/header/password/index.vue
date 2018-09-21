<template>
  <div>
    <div class="col-sm-12 step_head">
      <router-link to="/login"><img :src="logo" class="step_title_logo"/></router-link>
      <h3 class="step_title">CPS 申报服务处自主管理平台</h3>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/img/logo.png'

export default {
  name: 'passwordHead',
  data () {
    return {
      logo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
   @import 'index.scss';
</style>
