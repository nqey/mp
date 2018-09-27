<template>
    <div>
      <div class="col-sm-12 step_head">
        <router-link to="/login"><img :src="logo" class="step_title_logo"></img></router-link>
        <h3 class="step_title">CPS 申报服务处自主管理平台</h3>
      </div>
    </div>
</template>

<script>
import logo from '@/assets/img/logo.png';

export default {
  name: 'passwordHead',
  data() {
    return {
      logo,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin.scss';
.step_head {
  height: 80px;
  background-color: #fff;
  padding: 10px;
}
.step_title_logo {
  margin-left: 60px;height: 60px; float: left;
}
.step_title {
  float: left;margin-left: 20px;line-height: 60px;
}
</style>