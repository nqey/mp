<template>
  <div class="index_more">
    <div class="index_chunk">
      <h4>筛选条件</h4>
      <hr/>
      <div class="filters">
        <div class="form-inline">
          <div class="row clearfix sssrk">
            <div class="form-group col-md-4">
              <label>工厂名称</label>
              <select class="form-control" v-model="filter.factoryName">
                <option value="">请选择</option>
                <option v-for="(item, index) in list" value="id" :key="index">{{item.text}}</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label>二维码类型</label>
              <select class="form-control" v-model="filter.type">
                <option value="">请选择</option>
                <option v-for="(v,k) of CODE_TYPE" :value="k" :key="k">{{v}}</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label>二维码编号</label>
              <input type="text" class="form-control" v-model="filter.code" value="" placeholder="请输入二维码编号">
            </div>
            <div class="form-group col-md-4">
              <label>扫描次数</label>
              <input type="text" class="form-control" v-model="filter.scanTimes" value="" placeholder="请输入扫描次数(数字)">
            </div>
            <div class="form-group col-md-4">
              <label>二维码状态</label>
              <select class="form-control" v-model="filter.state">
                <option value="">请选择</option>
                <option v-for="(v,k) of CODE_DETAIL_STATE" :value="k" :key="k">{{v}}</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <button type="button" class="search btn_search btn datagrid-search" @click="search">
                <span class="glyphicon glyphicon-search"></span>搜索
              </button>
              <button type="button" class="search clear btn_search btn datagrid-clear" @click="clear"><span class="glyphicon glyphicon-trash"></span>清空</button>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <h4>二维码列表</h4>
      <hr/>
      <v-datagrid :columns="columns"
                  :data-url="dataUrl"
                  :count-url="countUrl"
                  :params="params">
      </v-datagrid>
      <v-abnormalmodal ref="abnormalmodal" :id="id"></v-abnormalmodal>
    </div>
  </div>
</template>

<script>
import { formatDate, reomveBlank } from '@/config/utils'
import { CODE_DETAIL_STATE, CODE_TYPE } from '@/config/mapping'
import { platformStatisticalCodeQuery, platformStatisticalCodeQueryCount } from '@/config/api/goods-api'
import { platformFactoryUsable } from '@/config/api/enterprise-api'

export default {
  name: 'index',
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
      id: null,
      list: '',
      filter: {
        factoryName: '',
        type: '',
        code: null,
        scanTimes: null,
        state: ''
      },
      params: {},
      CODE_DETAIL_STATE,
      CODE_TYPE,
      dataUrl: platformStatisticalCodeQuery,
      countUrl: platformStatisticalCodeQueryCount,
      columns: [{ field: 'code', header: '二维码编号', width: 200 },
        {
          field: 'type',
          header: '类型',
          sort: 'name',
          width: 220,
          formatter: row => this.CODE_TYPE[row.type]
        },
        { field: 'goodsName', header: '商品名称', width: 220 },
        { field: 'enterpriseName', header: '所属企业', width: 300 },
        { field: 'factoryName', header: '赋码工厂', width: 300 },
        {
          field: 'factoryTime',
          header: '生产时间',
          width: 200,
          formatter (row, index, value) {
            return value && formatDate(value)
          }
        },
        { field: 'franchiserName', header: '经销商', width: 300 },
        { field: 'scanTimes', header: '扫描次数', width: 150 },
        {
          field: 'state',
          header: '状态',
          width: 140,
          html: true,
          formatter: row => (this.CODE_DETAIL_STATE[row.state] === '正常' ? '正常' : '<span style="color:red;">异常</span>'),
          actions: [{
            text: '(查看原因)',
            show (row) {
              return row.state === 'highRisk'
            },
            handler: (row) => {
              this.id = row.riskId
              this.$refs.abnormalmodal.$refs.abnormalmodal.toggle()
            }
          }]
        },
        {
          field: 'action',
          header: '详情',
          width: 180,
          actions: [{
            text: '【查看详情】',
            handler: row => this.$router.push(`/code/list/log/${row.type}${row.id}`)
          }]
        }
      ]
    }
  },
  computed: {},
  methods: {
    search () {
      this.params = reomveBlank(this.filter)
    },
    clear () {
      this.params = {}
      this.filter = {
        factoryName: '',
        type: '',
        state: ''
      }
    },
    async getData () {
      const param = {
        type: '2'
      }
      this.list = await platformFactoryUsable(param)
    }
  },
  watch: {},
  components: {
    'v-abnormalmodal': () => import('./abnormalmodal'),
    'v-datagrid': () => import('@/components/datagrid')
  },
  beforeCreate () {
  },
  cteated () {
  },
  beforeMount () {
  },
  mounted () {
    this.getData()
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
