<template>
  <div>
    <v-password-head></v-password-head>
    <div class="step_more">
       <div class="step_chunk">
        <div class="text-center step_zccg">
            <div style="display: inline-block;width: 50px;height: 50px;border-radius: 25px;border: #01c853 1px solid;margin-bottom: 50px;">
              <span class="glyphicon glyphicon-ok" style="line-height: 50px;font-size: 20px; color:  #01c853"></span>
            </div>
             <p style="margin-bottom: 100px; font-size:22px ">密码修改成功！</p>
            <p><b>正在返回首页，请 <router-link to="/login">登录</router-link></b></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo',
  components: {
    'v-password-head': () => import('@/components/header/password')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
