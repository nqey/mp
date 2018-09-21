<template>
  <div>
    <v-register-head :step="1"></v-register-head>
    <div class="step_more">
     <div class="step_chunk">
        <div class="text-center step_zccg">
          <div style="display: inline-block;width: 50px;height: 50px;border-radius: 25px;border: #01c853 1px solid;margin-bottom: 50px;">
            <span class="glyphicon glyphicon-ok" style="line-height: 50px;font-size: 20px; color:  #01c853"></span>
          </div>
          <p style="margin-bottom: 100px; font-size:22px ">恭喜你注册帐号成功</p>
         <router-link to="/step2/1"><button class="btn btn-success" style="height: 35px;">下一步</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'step11',
  components: {
    'v-register-head': () => import('@/components/header/register')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
