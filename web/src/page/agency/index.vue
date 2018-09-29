<template>
  <div>
    <v-detail-head :type="$route.params.type"></v-detail-head>
    <div class="clearfix"></div>
    <div class="index_more">
      <div class="index_chunk">
        <div class="t_nav clearfix">
          &#12288;{{title}}
       <!--    <small class="pull-right" style="font-size: 12px">
            联系申报服务处请拨打 400-666-6666
          </small> -->
        </div>
        <hr>
        <div class="form-inline row clearfix">
          <div class="col-6">
           <v-area @acceptData="setLiveAddress"></v-area>
           <input type="text" class="form-control" placeholder="请输入名称" v-model="params.name">
          </div>
          <div class="col-6">
            <div class="input-group">
               <button class="btn ss" @click="search(1)" style="height: 35px">搜索</button>
            </div>
          </div>
        </div>
        <br/>
        <div v-show="resData.length > 0">
          <table class="table" v-if="$route.params.type === '1'">
            <thead>
              <tr>
                <th>序号</th>
                <th>姓名</th>
                <th>联系方式</th>
                <th>所属服务处</th>
                <th>机构联系方式</th>
                <th>地址</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) of resData" :key="i">
                <th>{{item.sn}}</th>
                <td>{{item.name}}</td>
                <td>{{item.cellphone}}</td>
                <td>{{item.organizName}}</td>
                <td>{{item.organizCellphone}}</td>
                <td>{{item.declarerAddress}}</td>
              </tr>
            </tbody>
          </table>
          <table class="table" v-if="$route.params.type === '2'">
            <thead>
              <tr>
                <th>序号</th>
                <th>公司</th>
                <th>服务处名称</th>
                <th>所属服务处</th>
                <th>地址</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) of resData" :key="i">
                <th>{{item.sn}}</th>
                <td>{{item.companyName}}</td>
                <td>{{item.name}}</td>
                 <td>{{item.provenceName}}</td>
                <td>{{item.address}}</td>
              </tr>
            </tbody>
          </table>
           <table class="table" v-if="$route.params.type === '3'">
            <thead>
              <tr>
                <th>序号</th>
                <th>公司</th>
                <th>负责人</th>
                <th>区域</th>
                <th>联系方式</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) of resData" :key="i">
                <th>{{item.sn}}</th>
                <td>{{item.companyName}}</td>
                <td>{{item.chargerName}}</td>
                <td>{{item.area}}</td>
                <td>{{item.cellphone}}</td>
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
import { getDeclareOrganiz, getDeclareOrganizCount, getFreedomList, getfreedomCount, getDeclareFwzx, getDeclareFwzxCount } from '@/config/api/declare-api'

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
          this.resData = d || []
        })
        getDeclareOrganizCount(this.params).then((d) => {
          this.pages = Math.ceil(d / this.params.rows)
        })
      } else if (type === '2') {
        this.title = '申报服务处'
        getFreedomList(this.params).then((d) => {
          this.resData = d || []
        })
        getfreedomCount(this.params).then((d) => {
          this.pages = Math.ceil(d / this.params.rows)
        })
      } else if (type === '3') {
        this.title = '省级服务中心'
        getDeclareFwzx(this.params).then((d) => {
          this.resData = d || []
        })
        getDeclareFwzxCount(this.params).then((d) => {
          this.pages = Math.ceil(d / this.params.rows)
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
