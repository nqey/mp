<template>
  <div class="index_more">
      <div class="index_chunk">
    <div class="t_nav">&#12288;{{title}}</div>
    <hr>
    <div style="width: 100%;text-align: center; padding:7% 0;">
      <div style="display: inline-block;width: 50px;height: 50px;border-radius: 25px;border: #01c853 1px solid;">
        <span class="glyphicon glyphicon-ok" style="line-height: 50px;font-size: 20px; color:  #01c853"></span>
      </div>
      <br/>
      <br/>
      <p>{{content}}</p>
      <br/>
      <br/>
      <span>
        <p>{{content2}}</p>
        <p>{{content3}}</p>
        <br/>
        <br/>
      </span>
      <router-link :to="alink" v-if="alink"><button class="btn js-ajax-submit" style="height: 35px;">继续添加</button></router-link>
      <router-link :to="blink" v-if="blink"><button class="btn ljsq" style="height: 35px;">返回列表</button></router-link>
      <router-link :to="clink" v-if="clink"><button class="btn js-ajax-submit" style="height: 35px;">继续申报</button></router-link>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'msg',
  data () {
    return {
      title: sessionStorage.getItem('title'),
      content: sessionStorage.getItem('content'),
      content2: sessionStorage.getItem('content2'),
      content3: sessionStorage.getItem('content3'),
      alink: sessionStorage.getItem('alink'),
      blink: sessionStorage.getItem('blink'),
      clink: sessionStorage.getItem('clink')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
