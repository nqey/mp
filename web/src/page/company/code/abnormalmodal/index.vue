<template>
  <div>
    <v-modal
      :title="title"
      :width="width"
      ref="abnormalmodal">
        <div slot="body">
          <img :src="warn" style="display: block;margin: 30px auto 0;">
          <div style="text-align: center; margin: 10px 0; font-size: 25px;">二维码异常！</div>
          <div style="text-align: center;padding:0 40px; margin-bottom: 20px;line-height: 20px;">该二维码于{{data.createTime && formatDate(data.createTime)}}在{{data.address}}被扫描，{{data.reason}}</div>
        </div>
        <div slot='footer'>
        </div>
    </v-modal>
  </div>
</template>

<script>
import { formatDate } from '@/config/utils'
import warn from '@/assets/img/warn.png'
import { platformCodeGetLog } from '@/config/api/goods-api'

export default {
  name: 'abnormalModal',
  props: {
    id: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      formatDate,
      warn,
      data: {
        createTime: null,
        address: null,
        reason: null
      },
      title: '异常原因',
      width: 500
    }
  },
  computed: {},
  methods: {
    getData () {
      const param = {
        logId: this.id
      }
      // const res = await this.$http.get(PLATFORM_CODE_GET_LOG, param)
      platformCodeGetLog(param).then(res => {
        this.data = res
      })
    }
  },
  watch: {
    id () {
      this.getData()
    }
  },
  components: {
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
  @import 'index.scss'
</style>
