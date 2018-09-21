<template>
  <div>
    <v-detail-head :type="$route.params.type"></v-detail-head>
    <div class="clearfix"></div>
    <div class="index_more">
      <div class="index_chunk">
        <div class="t_nav clearfix">
          &#12288;{{title}}
          <small class="pull-right" style="font-size: 12px">
            联系申报服务处请拨打 400-666-6666
          </small>
        </div>
        <hr>
        <div class="form-inline row clearfix">
          <div class="col-6">
           <v-area @acceptData="setLiveAddress"></v-area>
           <input type="text" class="form-control" placeholder="请输入机构名称或负责人" v-model="params.name">
          </div>
          <div class="col-6">
            <div class="input-group">
               <button class="btn ss" @click="search(1)" style="height: 35px">搜索</button>
            </div>
          </div>
        </div>
        <br/>
        <div v-show="resData.length > 0">
          <table class="table">
            <thead>
              <tr>
                <th>序号</th>
                <th>机构名称</th>
                <th>负责人</th>
                <th>负责区域</th>
                <th v-if="$route.params.type === '1'">地址</th>
                <th v-if="$route.params.type !== '1'">联系方式</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) of resData" :key="i">
                <th scope="row">{{item.id}}</th>
                <td>{{item.name}}</td>
                <td v-if="$route.params.type === '1'">{{item.charger}}</td>
                <td v-if="$route.params.type !== '1'">{{item.chargerName}}</td>
                <td>{{item.chargeAddress}}</td>
                <td v-if="$route.params.type === '1'">{{item.address}}</td>
                <td v-if="$route.params.type !== '1'">{{item.cellphone}}</td>
              </tr>
            </tbody>
          </table>
          <v-pagination :page="pages" @nextPage="search"></v-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from '@/components/pagination'
import detailHead from '@/components/header/detail'
import area from '@/components/area/area'
import { getDeclareOrganiz, getDeclareOrganizCount, getDeclareFwzx, getDeclareFwzxCount } from '@/config/api/declare-api'

export default {
  name: 'agency',
  data () {
    return {
      title: '',
      params: {
        name: '',
        areaCode: '',
        page: 1,
        rows: 10
      },
      pages: 0,
      resData: []
    }
  },
  components: {
    'v-pagination': pagination,
    'v-detail-head': detailHead,
    'v-area': area
  },
  methods: {
    search (page) {
      this.params.page = page
      const type = this.$route.params.type
      if (type === '1') {
        this.title = '申报官'
        getDeclareOrganiz(this.params).then((d) => {
          this.resData = d
        })
        getDeclareOrganizCount(this.params).then((d) => {
          this.pages = Math.ceil(d / this.form.rows)
        })
      } else if (type === '2') {
        this.title = '申报服务处'
        getDeclareFwzx(type, this.params).then((d) => {
          this.resData = d
        })
        getDeclareFwzxCount(type, this.params).then((d) => {
          this.pages = Math.ceil(d / this.form.rows)
        })
      } else if (type === '3') {
        this.title = '省级服务中心'
        getDeclareFwzx(type, this.params).then((d) => {
          this.resData = d
        })
        getDeclareFwzxCount(type, this.params).then((d) => {
          this.pages = Math.ceil(d / this.form.rows)
        })
      }
    },
    setLiveAddress (d) {
      this.params.areaCode = d
    }
  },
  mounted () {
    this.search(1)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
