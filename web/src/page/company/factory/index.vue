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
              <input type="text" class="form-control" v-model="filter.name" placeholder="请输入企业名称">
            </div>
            <div class="form-group col-md-4">
              <label>工厂类型</label>
              <select class="form-control" v-model="filter.type">
                <option value="">请选择</option>
                <option v-for="(v,k) of FACTORY_TYPE" :value="k" :key="k">{{v}}</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label>审核状态</label>
              <select class="form-control" v-model="filter.state">
                <option value="">请选择</option>
                <option v-for="(v,k) of FACTORY_STATE" :value="k" :key="k">{{v}}</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label>区&#12288;&#12288;域</label>
              <v-area :code="filter.areaCode" :onAreaChanged="(code) => filter.areaCode = code"></v-area>
            </div>
            <div class="form-group col-md-4">
              <button type="button" class="btn btn_search" @click="search">
                <span class="glyphicon glyphicon-search"></span>搜索
              </button>
              <button type="button" class="btn btn_search" @click="clear">
                <span class="glyphicon glyphicon-trash"></span>清空
              </button>
            </div>
          </div>
        </div>
        <!-- ********* -->
        <!-- <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="工厂名称">
            <el-input v-model="filter.name" placeholder="请输入企业名称"></el-input>
          </el-form-item>
          <el-form-item label="工厂类型">
            <el-select v-model="filter.type" placeholder="请选择">
              <el-option
                v-for="(k, v) of FACTORY_TYPE"
                :key="v"
                :label="k"
                :value="v">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="审核状态">
            <el-select v-model="filter.state" placeholder="请选择">
              <el-option
                v-for="(k, v) of FACTORY_STATE"
                :key="v"
                :label="k"
                :value="v">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search">搜索</el-button>
            <el-button type="primary" @click="clear">清空</el-button>
          </el-form-item>
        </el-form>
        <el-form>
          <el-form-item label="区域">
            <v-area :code="filter.areaCode" :onAreaChanged="(code) => filter.areaCode = code"></v-area>
          </el-form-item>
        </el-form> -->
        <!-- ******** -->
      </div>
      <br/>
      <br/>
      <h4>工厂列表</h4>
      <hr/>
      <v-datagrid :columns="columns"
                  :data-url="dataUrl"
                  :count-url="countUrl"
                  :params="params">
      </v-datagrid>
    </div>
  </div>
</template>

<script>
import { formatDate, reomveBlank } from '@/config/utils'
import { FACTORY_TYPE, FACTORY_STATE } from '@/config/mapping'
import { platformFactoryQuery, platformFactoryQueryCount } from '@/config/api/enterprise-api'

export default {
  name: 'index',
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
      filter: {
        name: null,
        type: '',
        state: '',
        areaCode: ''
      },
      params: {
        states: 'pending, passed, failed'
      },
      FACTORY_TYPE,
      FACTORY_STATE,
      dataUrl: platformFactoryQuery,
      countUrl: platformFactoryQueryCount,
      columns: [{ field: 'id', header: '序号', sort: 'id', width: 100 },
        { field: 'name', header: '工厂名称', sort: 'name', width: 200 },
        { field: 'creator', header: '上传企业', sort: 'creator', width: 250 },
        {
          field: 'type',
          header: '工厂类型',
          width: 100,
          formatter: row => this.FACTORY_TYPE[row.type]
        },
        {
          field: 'state',
          header: '状态',
          width: 150,
          formatter: row => this.FACTORY_STATE[row.state]
        },
        {
          field: 'areaCode-phone-extendNumber',
          header: '工厂电话',
          width: 200,
          formatter (row) {
            return `${row.areaCode === undefined ? '' : `${row.areaCode}-`}${row.phone}${row.extendNumber === undefined ? '' : `(${row.extendNumber})`}`
          }
        },
        {
          field: 'areaaddress',
          header: '地址',
          width: 300,
          formatter (row) {
            return `${row.area}${row.address}`
          }
        },
        {
          field: 'createTime',
          header: '创建时间',
          sort: 'create_time',
          width: 180,
          formatter (row, index, value) {
            return formatDate(value)
          }
        },
        {
          field: 'action',
          header: '详情',
          width: 150,
          actions: [{
            text: '【查看详情】',
            show () {
              return true
            },
            handler: (row) => {
              this.$router.push(`/factory/list/view/${row.id}`)
            }
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
        type: '',
        state: '',
        areaCode: ''
      }
    }
  },
  watch: {},
  components: {
    'qc-input': () => import('@/components/input'),
    'v-datagrid': () => import('@/components/datagrid'),
    'v-area': () => import('@/components/area/area'),
    'v-modal': () => import('@/components/modal')
  },
  beforeCreate () {
  },
  cteated () {
  },
  beforeMount () {
  },
  mounted () {
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
  @import 'index.scss';
</style>
