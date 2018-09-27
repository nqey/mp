<template>
   <div class="index_more">
    <div class="index_chunk">
      <div class="form-inline">
        <div class="form-group txr">
          <label class="label_height">企业名称：</label>
          <input type="text" class="form-control iw200" placeholder="请输入企业名称：" v-model="name">
        </div>
        <div class="form-group txr">
          <label class="label_height">申报人：</label>
          <input type="text" class="form-control iw200" placeholder="请输入申报人" v-model="charger">
        </div>
        <div class="form-group txr">
          <label class="label_height">企业状态：</label>
          <select class="form-control" v-model="state">
            <option value="">请选择</option>
            <option v-for="(value, key) of selEntState" :value="key" :key="key">{{value}}</option>
          </select>
        </div>
        <div class="form-group">
          <button class="btn btn_search" @click="search(1)">搜索</button>
        </div>
      </div>
    </div>
    <div class="index_chunk">
      <div class="t_nav">&#12288;企业列表</div>
      <hr>
      <span v-if="lists.length === 0">无数据</span>
      <div v-show="lists.length > 0">
        <table class="table">
            <thead>
              <tr>
                <th>企业名称</th>
                <th>状态</th>
                <th>申报人</th>
                <th>申报时间</th>
                <th>生码数量(个)</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) of lists" :key="index">
                <td>{{item.name}}</td>
                <td v-show="item.reason" style="color: #ac2925;">{{selEntState[item.state]}} <span class="glyphicon glyphicon-question-sign"></span>{{item.reason}}</td>
                <td v-show="!item.reason">{{selEntState[item.state]}}</td>
                <td>{{item.declarerName}}</td>
                <td>{{item.createTime}}</td>
                <td>{{item.codeCount}}</td>
                <td>
                  <router-link v-show="item.detailShow" :to="'/organiz/enterprise/'+item.id">查看</router-link>
                  <router-link v-show="item.eidtShow" :to="'/decEnt/edit/'+item.id">修改</router-link>
                </td>
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
import { exterpriseList, exterpriseListCount } from '@/config/api/declare-api'
import { formatDate } from '@/config/utils'

export default {
  name: 'entList',
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
      showImg: false,
      lists: [],
      name: '',
      charger: '',
      state: '',
      page: 1,
      rows: 10,
      pages: 0,
      selEntState: {
        waitPending: '申报材料待初审',
        waitUnPending: '申报材料初审未通过',
        waitPended: '申报材料初审通过',
        waitAudit: '申报材料待复审',
        unPass: '申报材料复审未通过',
        pass: '申报材料复审已通过',
        wait: '系统服务费待支付',
        pending: '入库材料待初审',
        collectting: '待认证官上门采集',
        confirmFailed: '入库材料初审未通过',
        reject2: '认证官采集未完成',
        pending2: '认证材料待复审',
        confirm2Failed: '认证材料复审未通过',
        passed: '认证材料复审已通过'
      }
    }
  },
  computed: {},
  methods: {
    search (page) {
      const param = {}
      param.name = this.name
      param.charger = this.charger
      param.state = this.state
      if (!page) {
        param.page = this.page
      } else {
        param.page = page
      }
      param.rows = this.rows
      // **************
      // const res = await this.$http.get(DECLARE_GET_ENTERPRISE_LIST, param)
      exterpriseList(param).then(res => {
        this.lists = res || []
        this.lists.forEach((o) => {
          o.eidtShow = false
          o.detailShow = true
          if (o.state === 'waitUnPending') {
            o.eidtShow = true
            o.detailShow = false
          } else if (o.state === 'unPass') {
            o.eidtShow = true
            o.detailShow = false
          } else if (o.state === 'confirmFailed') {
            o.eidtShow = true
            o.detailShow = false
          } else if (o.state === 'reject2') {
            o.eidtShow = true
            o.detailShow = false
          } else if (o.state === 'confirm2Failed') {
            o.eidtShow = true
            o.detailShow = false
          }
          o.createTime = formatDate(new Date(o.createTime), 'yyyy-MM-dd hh:mm:ss')
        })
      })
      // *************
      const param2 = {}
      param2.name = this.name
      param2.charger = this.charger
      param2.state = this.state
      // ***********
      // const res2 = await this.$http.get(DECLARE_GET_ENTERPRISE_COUNT, param2)
      exterpriseListCount(param2).then(res2 => {
        this.pages = Math.ceil(res2 / param.rows)
      })
      // ************
    }
  },
  watch: {},
  components: {
    'qc-input': () => import('@/components/input'),
    'v-pagination': pagination
  },
  beforeCreate () {
  },
  cteated () {
  },
  beforeMount () {
  },
  mounted () {
    this.search()
  },
  beforeUpdate () {
  },
  updated () {
  },
  beforeDestroy () {
  },
  destroyed () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
