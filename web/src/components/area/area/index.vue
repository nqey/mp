<template>
  <div class="area form-inline">
      <select v-show="provinces.length > 0" class='form-control' @change="queryCity" v-model="province" :disabled="disabled">
        <option value="">请选择省份</option>
        <option v-for="(item, i) in provinces" :value="item.code" :key="i">{{item.text}}</option>
      </select>
      <select v-show="citys.length > 0" class='form-control' @change="queryTown" v-model="city" v-if="type!=='3'" :disabled="disabled">
        <option value="">请选择市</option>
        <option v-for="(item, i) in citys" :value="item.code" :key="i">{{item.text}}</option>
      </select>
      <select v-show="towns.length > 0" class='form-control' v-model="town" @change="queryPlaces();sendData()" v-if="type!=='3'" :disabled="disabled">
        <option value="">请选择区/县</option>
        <option v-for="(item, i) in towns" :value="item.code" :key="i">{{item.text}}</option>
      </select>
      <span v-if="type==='2'" style="line-height: 35px;">剩余名额 <font style="color: blue;">{{rmplaces}}</font></span>
  </div>
</template>

<script>
import { getAreaTree } from '@/config/api/base-api'
import { getArealimitAreacode } from '@/config/api/declare-api'

export default {
  name: 'geoArea',
  props: {
    areacode: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      province: '',
      city: '',
      town: '',
      provinces: [],
      citys: [],
      towns: [],
      rmplaces: 0
    }
  },
  watch: {
    areacode: 'getAreaTree'
  },
  components: {},
  methods: {
    init () {
      getAreaTree().then((d) => {
        this.provinces = d
        this.setAreaCode()
      })
    },
    queryPlaces () {
      if (this.type !== '2') return
      getArealimitAreacode(this.town).then((d) => {
        this.rmplaces = d.remainNumber
      }).catch(() => {
        this.rmplaces = 0
      })
    },
    queryCity () {
      this.citys = []
      this.towns = []
      this.city = ''
      this.town = ''
      this.provinces.forEach((item) => {
        if (item.code === this.province) {
          this.citys = item.nodes
        }
      })
      this.sendData()
    },
    queryTown () {
      this.towns = []
      this.town = ''
      this.citys.forEach((item) => {
        if (item.code === this.city) {
          this.towns = item.nodes
        }
      })
      this.sendData()
    },
    sendData () {
      this.$emit('acceptData', this.town || this.city || this.province)
    },
    setAreaCode () {
      if (this.areacode) {
        const a = this.areacode.split(',')
        this.province = a[0]
        this.queryCity()
        this.city = a[1]
        this.queryTown()
        this.town = a[2]
        this.sendData()
      }
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
