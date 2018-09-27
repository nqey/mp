
<template>
  <div class="index_more">
      <div class="index_chunk">
          <v-datagrid :columns="columns" :checkable="false"
              :data-url="dataUrl" :count-url="countUrl"></v-datagrid>
      </div>
  </div>
</template>

<script>
import datagrid from '@/components/datagrid'
import { subsidyRecard, subsidyRecardCount } from '@/config/api/declare-api'
import { formatDate } from '@/config/utils'

export default {
  name: 'user',
  data () {
    return {
      dataUrl: subsidyRecard,
      countUrl: subsidyRecardCount,
      status: {
        pending: '待审核',
        passed: '通过',
        rejected: '未通过',
        delayed: '延后'
      },
      typeObj: {
        1: '企业入库',
        2: '二维码',
        3: '粉丝',
        4: '推荐'
      },
      columns: [{ field: 'sn', header: '交易号', sort: 'sn', width: 230 },
        {
          field: 'createTime',
          header: '申请时间',
          sort: 'create_time',
          width: 230,
          formatter (row, index, value) {
            return formatDate(value)
          }
        },
        { field: 'amount', header: '申请金额', width: 230 },
        {
          field: 'account',
          header: '银行卡',
          width: 230
        },
        {
          field: 'state',
          header: '补贴状态',
          width: 230,
          formatter: row => this.status[row.state]
        }
      ]
    }
  },
  methods: {},
  components: {
    'v-datagrid': datagrid
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
