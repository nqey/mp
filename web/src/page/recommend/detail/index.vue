<template>
  <div class="index_more">
      <div class="index_chunk" style="text-align: center;">
        <h4>补贴明细</h4>
        <hr/>
         <table class="table table-bordered">
            <thead>
              <tr>
                <th>名称</th>
                <th>类型</th>
                <th>数量</th>
                <th>金额</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) of list" :key="i">
                <td>{{item.name}}</td>
                <td>{{item.type}}</td>
                <td>{{item.quantity}}</td>
                <td>{{item.amount}}</td>
              </tr>
            </tbody>
          </table>
          <router-link to="/recommend/apply"><button class="btn fh">返回</button></router-link>
      </div>
  </div>
</template>

<script>
import { organizDeclarerRecommendAmountDetail } from '@/config/api/declare-api'

export default {
  name: 'recommendDetail',
  data () {
    return {
      list: null
    }
  },
  async mounted () {
    this.list = await organizDeclarerRecommendAmountDetail()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
