<template>
  <div class="index_more">
    <div class="index_chunk">
      <div class="form-horizontal">
        <p class="title bb">
          <a href="#/ent/officer" class="back_icon">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAYAAABfJS4tAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUxRDI3MEMxMkU2MjExRThCMERBRUYwMjdBMDQ5NjdFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUxRDI3MEMyMkU2MjExRThCMERBRUYwMjdBMDQ5NjdFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTFEMjcwQkYyRTYyMTFFOEIwREFFRjAyN0EwNDk2N0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTFEMjcwQzAyRTYyMTFFOEIwREFFRjAyN0EwNDk2N0UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Il0tdAAABkUlEQVR42qTUSyhEURzH8ZnxDAtKUjIrEjsbG6yQYiGvsmCjLERZUnYkS481C1KmWVA2KKXEZjYKpTwWyEKJSY1HhO+pnzpN95rrOvXpTHPO/d9z/ud/bjAajQZStEaMqffc0lOMj2A24KOFXP4PYk5B1/wEdlpxBjZRjXJ8oOO/K87HqfowLqyxHKT5CVyGG2yjBomkuQmt/lS5L/ASuBbnGMQQPq05V8hFtvo25OEBk8hyC9yDLVRhxWHOF57xpv4MU8hECZ4UI5gcuBsnSfn00t7Rj1YsYdkObgJ3Iab8FvmorB0UowWrdrl96TCOcIc6HFgPFmJGv834hubGrTmPqMAt2rFuV8UimrCPUWtb5qB6VS0vGNALrjGOSs27V1oiZsHpDtsyl+JQldJpjdkH26dy69ALb5Vv8/wxmp2utDnEUlXJJRpccvuoXYaVyl19BiYw7PYRimuL5moveDjAmBazp7S5foR+ysnkfF6XwUv51WsnvwYOWBVT4rH0PlR2kZDHB17/UNfmZk5/CzAA6YlY7OPwKSsAAAAASUVORK5CYII=">
          </a>
        </p>
      </div>
      <!-- ********** -->
        <div class="form-group">
          <!-- 个人信息 -->
          <div class="col-sm-6">
            <div class="from-group">
              <h4 class="h40">个人信息</h4>
            </div>
            <div class="form-group">
              <div class="col-sm-2">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</div>
              <span class="col-sm-4">{{data.name}}</span>
            </div>
            <div class="form-group">
              <div class="col-sm-2">手机号码</div>
              <span class="col-sm-4">{{data.cellphone}}</span>
            </div>
            <div class="form-group">
              <div class="col-sm-2">编&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</div>
              <span class="col-sm-4">{{id}}</span>
            </div>
            <div class="form-group">
              <div class="col-sm-2">隶属服务处</div>
              <span class="col-sm-4">{{data.organizName}}</span>
            </div>
            <div class="form-group">
              <div class="col-sm-2">我的邀请人</div>
              <span class="col-sm-4">{{data.recommend}}</span>
            </div>
            <div class="form-group">
              <div class="col-sm-2">审核状态</div>
              <span class="col-sm-4" :style="{color: colorReturn}">{{nameReturn}}</span>
            </div>
            <div class="form-group" v-if="data.reason">
              <div class="col-sm-2">不通过理由</div>
              <span class="col-sm-4" style="color: red;">{{data.reason}}</span>
            </div>
          </div>
          <!-- 下载二维码 -->
          <div class="col-sm-6 erweima" v-show="!isShowStatus">
            <p style="margin-top: 30px;">
              <a href="#">查看二维码扫描情况</a>
            </p>
            <p>
              <img :src="CODE + $route.params.id" alt="error" style="width: 200px;">
            </p>
            <p>
              <a :href="CODE + $route.params.id" download>
                <button class="btn" style="width: 180px;">下载二维码</button>
              </a>
            </p>
          </div>
        </div>
      <!-- ********** -->
      <div class="form-horizontal">
        <div class="form-group bb basic-info" @click="showDifferent">
          <div class="col-sm-2">
            <span :class="{active: isShow === 0}" data-id="0">基本信息</span>
          </div>
          <div class="col-sm-2">
            <span :class="{active: isShow === 1}" data-id="1">实名认证</span>
          </div>
          <div class="col-sm-2">
            <span :class="{active: isShow === 2}" data-id="2">诚信登记</span>
          </div>
        </div>
        <!-- 基本信息 -->
        <div class="view-change" v-show="isShow === 0">
          <div class="form-group">
            <label for="" class="col-sm-1">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</label>
            <span class="col-sm-8">{{data.name}}</span>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-1">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</label>
            <span class="col-sm-8">{{data.sex}}</span>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-1">民&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族</label>
            <span class="col-sm-8">{{data.nation}}</span>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-1">手机号码</label>
            <span class="col-sm-8">{{data.cellphone}}</span>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-1">所属区域</label>
            <span class="col-sm-8">{{data.areaCode}}</span>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-1">详细地址</label>
            <span class="col-sm-8">{{data.address}}</span>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-1">最高学历</label>
            <span class="col-sm-8">{{data.education}}</span>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-1">毕业院校</label>
            <span class="col-sm-8">{{data.graduate}}</span>
          </div>
        </div>
        <!-- 实名认证 -->
        <div class="view-change" v-show="isShow === 1">
          <div class="form-group">
            <label for="" class="col-sm-1">寸&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;照</label>
            <div class="col-sm-4">
              <v-img v-if="data.portrait" :imgSrc="data.portrait"></v-img>
            </div>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-1">身份证号</label>
            <span class="col-sm-8">{{data.idNumber}}</span>
          </div>
          <div class="form-group identify-card">
            <label for="" class="col-sm-1">身份证正反面</label>
            <div class="col-sm-10">
              <v-img v-if="data.idBackUrl" :imgSrc="data.idBackUrl"></v-img>
              <v-img v-if="data.idFrontUrl" :imgSrc="data.idFrontUrl"></v-img>
            </div>
          </div>
        </div>
        <!-- 诚信登记 -->
         <div class="view-change" v-show="isShow === 2">
          <div class="form-group">
            <label for="" class="col-sm-1">申报官尽职调查表</label>
            <div class="col-sm-8">
              <v-img v-if="data.surveyImageUrl" :imgSrc="data.surveyImageUrl"></v-img>
            </div>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-1">承诺公函</label>
            <div class="col-sm-8">
             <v-img v-if="data.letterImageUrl" :imgSrc="data.letterImageUrl"></v-img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrganizDeclarerDetails } from '@/config/api/declare-api'
import { formatDate } from '@/config/utils'
import { DECLARE_STATE } from '@/config/mapping'
import { DECLARE_BASE_URL } from '@/config/api/env'

export default {
  name: 'demo',
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
      isShow: 0,
      formatDate,
      DECLARE_STATE,
      data: '',
      color: '',
      CODE: `${DECLARE_BASE_URL}platform/declarer/download/qrcode.jpg?id=`
    }
  },
  computed: {
    colorReturn: function () {
      if (this.data.state) {
        return DECLARE_STATE[this.data.state]['color']
      } else {
        return ''
      }
    },
    nameReturn: function () {
      if (this.data.state) {
        return DECLARE_STATE[this.data.state]['name']
      } else {
        return ''
      }
    },
    id: function () {
      if (this.data.id) {
        return `CpsDo:00000${this.data.id}`
      }
    }
  },
  methods: {
    showDifferent (e) {
      if (e.target.nodeName.toLowerCase() === 'span') {
        this.isShow = Number(e.target.dataset.id)
      }
    },
    init () {
      const id = this.$route.params.id
      getOrganizDeclarerDetails(id).then(res => {
        this.data = res
      })
    }
  },
  watch: {},
  components: {
    'v-img': () => import('@/components/img/img')
  },
  beforeCreate () {
  },
  cteated () {
  },
  beforeMount () {
  },
  mounted () {
    this.init()
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
  @import '@/assets/css/mixin.scss';
  @import 'index.scss'
</style>
