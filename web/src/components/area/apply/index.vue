<template>
  <div>
    <div class="form-inline">
      <select v-show="provinces.length > 0" class='form-control' @change="queryCity" v-model="province">
        <option value="">请选择省份</option>
        <option v-for="(item, i) in provinces" :value="item.code" :key="i">{{item.text}}</option>
      </select>
      <select v-for="(o, i) of cityArr" :class="['form-control', {b: i > 0}]" @change="sendData" v-model="o.city" :key="i">
        <option value="">请选择市</option>
        <option v-for="(item, i) in citys" :value="item.code" :key="i">{{item.text}}</option>
      </select>
      <span style="line-height: 35px;">剩余名额 <font class="fc">{{rmplaces}}</font></span>
    </div>
    <div class="form-group">
      <div class="col-12">
        <small class="areafc">为了方便管理，每一个身份证仅能选择一个申请一个名额。</small>
        <br/>
        <small class="areafc">每一个市级名额有限，剩余为0则不能选择。</small>
        <button type="button" @click="addArea" v-show="cityArr.length > 0"
         style="background:#015FE5; border:none; outline:none;border-radius:3px; color:#fff; padding:3px 10px;font-size:12px;">增加区域</button>
        <button type="button" @click="delArea" v-show="cityArr.length > 0"
         style="background:#015FE5; border:none; outline:none;border-radius:3px; color:#fff; padding:3px 10px;font-size:12px;">减少区域</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getAreaTree } from '@/config/api/base-api'
import { getArealimitAreacode } from '@/config/api/declare-api'

export default {
  name: 'applyArea',
  props: [],
  data () {
    return {
      province: '',
      city: '',
      cityArr: [],
      provinces: [],
      citys: [],
      rmplaces: 0
    }
  },
  components: {},
  methods: {
    addArea () {
      this.cityArr.push({ city: '' })
    },
    delArea () {
      this.cityArr.splice(-1, 1)
    },
    queryCity () {
      this.queryPlaces()
      this.cityArr = []
      this.citys = []
      this.provinces.forEach((item) => {
        if (item.code === this.province) {
          if ('120000,110000,310000,500000'.indexOf(this.province) > -1) {
            this.citys = item.nodes[0].nodes
          } else {
            this.citys = item.nodes
          }
        }
      })
      this.addArea()
    },
    queryPlaces () {
      getArealimitAreacode(this.province).then((d) => {
        this.rmplaces = d
      }).catch(() => {
        this.rmplaces = 0
      })
    },
    sendData () {
      const d = this.cityArr.map(o => o.city)
      this.$emit('acceptData', d.join(','))
    }
  },
  mounted () {
    getAreaTree().then((d) => {
      this.provinces = d
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
