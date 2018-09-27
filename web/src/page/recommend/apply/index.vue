<template>
  <div class="index_more">
      <div class="index_chunk" style="text-align: center;">
        <img :src="subsidies" style="width: 124px;height: 124px;">
        <br/>
        <div class="money"><span>{{money}}</span>元</div>
        <br/>
        <router-link to="/recommend/detail">查看补贴明细</router-link>
        <br/>
        <br/>
        <router-link to="/recommend/apply_subsidy">
          <button class="btn btn-primary" style="width: 350px;height: 35px;" :disabled="!(money > 0)">
          申请补贴
          </button>
        </router-link>
    </div>
  </div>
</template>

<script>
import subsidies from '@/assets/img/subsidies.png'
import { organizDeclarerRecommendAmount } from '@/config/api/declare-api'

export default {
  name: 'apply',
  data () {
    return {
      lists: [],
      subsidies,
      money: 0
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      const money = await organizDeclarerRecommendAmount()
      this.money = Number.prototype.toFixed.call((money * 10) / 9, 2)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
