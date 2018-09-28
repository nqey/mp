<template>
  <div class="index_more">
    <div class="index_chunk">
      <h4>筛选条件</h4>
      <hr/>
      <div class="filters">
        <div class="form-inline">
          <div class="row clearfix sssrk">
            <div class="form-group col-md-4">
              <label>姓&#12288;&#12288;名</label>
              <input type="text" class="form-control" v-model="filter.name" placeholder="输入负责人姓名">
            </div>
            <div class="form-group col-md-4">
              <label>手机号码</label>
              <input type="text" class="form-control" v-model="filter.cellphone" placeholder="输入手机号码">
            </div>
            <div class="form-group col-md-4">
              <label>机构名称</label>
              <input type="text" class="form-control" v-model="filter.organizName" placeholder="输入机构名称">
            </div>
            <div class="form-group col-md-4">
              <label>审核状态</label>
              <select class="form-control" v-model="filter.state">
                <option value="">请选择</option>
                <option v-for="(v,k) of ORGANIZ_STATE" :value="k" :key="k">{{ v.name }}</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label>时&#8194;间&#8194;段</label>
              <el-date-picker v-model="filter.startTime" type="date" value-format="yyyy-MM-dd" placeholder="起始时间"/>
              <span class="text-center">至</span>
              <el-date-picker v-model="filter.endTime" type="date" value-format="yyyy-MM-dd" placeholder="结束时间"/>
            </div>
            <div class="form-group col-md-4">
              <button type="button" class="btn btn_search" @click="search">
                <span class="glyphicon glyphicon-search"></span>搜索
              </button>
              <button type="button" class="btn btn_search" @click="clear"><span class="glyphicon glyphicon-trash"></span>清空</button>
            </div>
          </div>
        </div>
      </div>
      <h4>机构列表</h4>
      <hr/>
      <v-datagrid :columns="columns" :data-url="dataUrl" :count-url="countUrl" :params="params"></v-datagrid>
    </div>
  </div>
</template>

<script>
import { getOrganizList, getOrganizListCount, delPlatformOrganiz } from '@/config/api/declare-api'
import { ORGANIZ_STATE } from '@/config/mapping'
import { formatDate, reomveBlank } from '@/config/utils'
import { DatePicker, MessageBox } from 'element-ui'

export default {
  name: 'agency',
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
      ORGANIZ_STATE,
      filter: {
        name: null,
        cellphone: null,
        startTime: null,
        endTime: null,
        state: null,
        organizName: null
      },
      dataUrl: getOrganizList,
      countUrl: getOrganizListCount,
      params: {},
      columns: [
        { field: 'snId', header: '序号', sort: 'id', width: 200 },
        { field: 'name', header: '姓名', sort: 'name', width: 120 },
        { field: 'cellphone', header: '手机号码', sort: 'cellphone', width: 130 },
        { field: 'recommentName', header: '推荐机构', sort: 'recomment_name', width: 230 },
        { field: 'organizName', header: '企业名称', sort: 'organiz_name', width: 230 },
        {
          field: 'createTime',
          header: '提交时间',
          sort: 'create_time',
          width: 230,
          formatter (row, index, value) {
            return formatDate(value)
          }
        },
        {
          field: 'state',
          header: '审核状态',
          sort: 'state',
          width: 100,
          html: true,
          formatter (row, index, value) {
            const s = ORGANIZ_STATE[value]
            return s.name.fontcolor(s.color)
          }
        },
        {
          field: 'action',
          header: '操作',
          width: 200,
          actions: [
            {
              show (row) {
              // 不等于基本资料待填写和已删除可以查看详情
                return row.state !== 'baseWaitSubmit' && row.state !== 'deleted'
              },
              text: '【查看详情】',
              handler: this.view
            },
            {
              show (row) {
                return row.state !== 'deleted'
              },
              text: '【删除】',
              handler: this.delete
            }
          ]
        }
      ]
    }
  },
  computed: {},
  methods: {
    view (row) {
      this.$router.push(`/declarer/agency/view/${row.id}`)
    },
    async delete (row) {
      const { id } = row
      MessageBox({
        title: '提示',
        message: '将永久删除该数据，是否继续？',
        showCancelButton: true,
        showConfirmButton: true,
        type: 'warning'
      }).then(async () => {
        delPlatformOrganiz(id).then(() => this.search())
      })
    },
    search () {
      this.params = reomveBlank(this.filter)
    },
    clear () {
      this.params = {}
      this.filter = { state: '' }
    }
  },
  components: {
    'v-datagrid': () => import('@/components/datagrid'),
    'el-date-picker': DatePicker
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
