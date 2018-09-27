<template>
  <div class="index_more">
      <div class="index_chunk">
    <div class="t_nav">&#12288;推荐列表</div>
    <hr>
    <div style="background:#f6f7fb;width:80%;position:absolute;top:28px;left:230px;height: 50px;">
      <div style="width: 30%;text-align: center;float: left;line-height: 50px;">工号：<b>{{myCode}}</b></div>
    </div>
  <span v-if="lists.length === 0">无数据</span>
    <div v-show="lists.length > 0">
      <table class="table">
        <thead>
          <tr>
            <th>名称</th>
            <th>申报时间</th>
            <th>联系电话</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) of lists" :key="i">
            <td>{{item.name}}</td>
            <td>{{item.createTime}}</td>
            <td>{{item.cellphone}}</td>
            <td>{{status[item.state]}}</td>
          </tr>
        </tbody>
      </table>
      <v-pagination :page="pages" @nextPage="search"></v-pagination>
      <div style="clear: both;"></div>
    </div>
  </div>
</div>
</template>

<script>
import pagination from '@/components/pagination'
import { declareGetRecommend, declareGetRecommendCount } from '@/config/api/declare-api'
import { formatDate } from '@/config/utils'

export default {
  name: 'recommendlist',
  data () {
    return {
      page: 1,
      rows: 20,
      lists: [],
      pages: 0,
      myCode: null,
      status: {
        pending: '审核中',
        passed: '通过审核',
        unpass: '审核不通过'
      }
    }
  },
  methods: {
    async search (page) {
      const param = {
        page: page || this.page,
        rows: this.rows
      }
      const res = await declareGetRecommend(param)
      this.lists = res || []
      this.lists.forEach((o) => {
        o.createTime = formatDate(new Date(o.createTime), 'yyyy-MM-dd hh:mm:ss')
      })
      const res2 = await declareGetRecommendCount()
      this.pages = Math.ceil(res2 / param.rows)
    }
  },
  components: {
    'v-pagination': pagination
  },
  mounted () {
    this.myCode = window.sessionStorage.getItem('recommendId') || '无'
    this.search()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
