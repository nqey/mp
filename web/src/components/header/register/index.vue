<template>
  <div>
    <div class="col-sm-12 step_head">
      <router-link to="/login"><img :src="logo" class="step_title_logo"/></router-link>
      <h3 class="step_title">CPS 申报服务处自主管理平台</h3>
    </div>
    <div class="col-sm-12 step_main">
      <div class="step_content">
        <div class="col-sm-1"></div>
        <div :class="{ step_top: true, step_selected: isStep1, 'col-sm-2': true }">
          <span class="stepIcon">1</span>
          <span class="stepFont"> 注册帐号 ———— </span>
        </div>
        <div :class="{ step_top: true, step_selected: isStep2, 'col-sm-2': true }">
          <span class="stepIcon">2</span>
          <span class="stepFont"> 基本信息 ———— </span>
        </div>
        <div :class="{ step_top: true, step_selected: isStep3, 'col-sm-2': true }">
          <span class="stepIcon">3</span>
          <span class="stepFont"> 审核 ———— </span>
        </div>
        <div :class="{ step_top: true, step_selected: isStep4, 'col-sm-2': true }">
          <span class="stepIcon">4</span>
          <span class="stepFont"> 填表登记 ———— </span>
        </div>
        <div :class="{ step_top: true, step_selected: isStep5, 'col-sm-2': true }">
          <span class="stepIcon">5</span>
          <span class="stepFont"> 审核</span>
        </div>
        <div class="col-sm-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/img/logo.png'

export default {
  name: 'registerHead',
  props: ['step'],
  data () {
    return {
      logo,
      isStep1: false,
      isStep2: false,
      isStep3: false,
      isStep4: false,
      isStep5: false
    }
  },
  components: {},
  methods: {},
  mounted () {
    if (this.step === 1) {
      this.isStep1 = true
    } else if (this.step === 2) {
      this.isStep2 = true
    } else if (this.step === 3) {
      this.isStep3 = true
    } else if (this.step === 4) {
      this.isStep4 = true
    } else if (this.step === 5) {
      this.isStep5 = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
   @import 'index.scss';
</style>
