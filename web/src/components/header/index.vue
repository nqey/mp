<template>
  <div class="harder" id="header">
  <div class="header_con">
    <div class="header_content clearfix">
      <div class="pull-left">
        <form class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control header_search" placeholder="搜索" :style="{ background: fdjs }">
          </div>
        </form>
      </div>
      <div class="pull-right">
        <div class="dropdown">
          <a class="tx" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <img style="border-radius: 50%;" width="50" :src="tx ? getPictureUrl(tx, {q : 100, w: 50, h: 50}) : Logo"/><span class="caret"></span>
          </a>
          <div class="dropdown-menu tc" aria-labelledby="dropdownMenu1">
            <img style="border-radius: 50%;" width="60" :src="tx ? getPictureUrl(tx, {q : 100, w: 60, h: 60}) : Logo"/>
            <h5>{{username}}</h5>
            <button class="btn" @click="logout" >退出登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { getPictureUrl } from '@/config/utils'
import fdj from '@/assets/img/fdj.png'
import { delCookie } from '@/config/cookie'
import Logo from '@/assets/img/logo.png'

export default {
  name: 'topHeader',
  data () {
    return {
      getPictureUrl,
      tx: window.sessionStorage.getItem('portrait') || '',
      username: window.sessionStorage.getItem('username') || '',
      fdjs: `url(${fdj}) no-repeat 15px`,
      Logo
    }
  },
  methods: {
    logout () {
      delCookie('sb_token')
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
   @import 'index.scss';
</style>
