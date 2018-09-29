<template>
  <div>
    <v-register-head :step="2"></v-register-head>
    <div class="step_more ">
      <div class="step_chunk ">
        <div v-if="reason" style="text-align: center;color: red;">
          <span class="glyphicon glyphicon-exclamation-sign"></span> <span style="position: relative;top:-1px;">{{reason}}</span>
        </div>
        <div class="form-horizontal">
          <div class="form-group">
            <label  class="col-sm-4 control-label">姓 名：</label>
            <div class="col-sm-3">
              <input type="email" class="form-control" placeholder="请输入姓名" v-model="name" val-required>
            </div>
          </div>
          <div class="form-group">
            <label  class="col-sm-4 control-label">身份证号码：</label>
            <div class="col-sm-3">
              <input type="text" class="form-control" placeholder="请输入身份证号码" v-model="idNumber" val-required>
            </div>
          </div>
          <div class="form-group">
            <label  class="col-sm-4 control-label">身份证照片：</label>
            <div class="col-sm-8">
              <small class="callout label_height">请按照示例上传证件照片；支持格式：jpg、bmp、png、gif格式照片，大小不超2M。</small>
              <br/>
              <small class="callout-red label_height">请上传本人真实身份证，否则审核不通过。</small>
              <div class="clearfix"></div>
              <div class="pull-left" style="width: 200px;margin-right: 30px;">
                <v-multiple-upload len="1" :imgSrc="initFrontUrl" uploadid="upload2" title="上传正面" @acceptData="frontUrl" val-required :val-value="idFrontUrl"/>
              </div>
              <div class="pull-left" style="width: 200px;">
                <v-multiple-upload len="1" :imgSrc="initBackUrl" uploadid="upload3" title="上传背面" @acceptData="backUrl" val-required :val-value="idBackUrl"/>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label  class="col-sm-4 control-label">常住地址：</label>
            <div class="col-sm-5">
              <v-area :areacode="areacode" @acceptData="setLiveAddress"></v-area>
              <input type='text' class='form-control iw' placeholder='请输入详细地址' v-model="address" style="margin-top: 10px;">
            </div>
          </div>
          <div class="form-group">
            <label  class="col-sm-4 control-label">选择申请区域：</label>
            <div class="col-sm-5">
              <span class="label_height" v-show="$route.params.type === '2'">{{ organizAddress }}</span>
              <v-area v-show="$route.params.type === '1'" @acceptData="setApplyAddress" type="2" :disabled="disabled"></v-area>&#12288;
            </div>
          </div>
          <div class="form-group">
            <label  class="col-sm-4 control-label">推荐人工号：</label>
            <div class="col-sm-3">
              <input type="text" class="form-control" placeholder="推荐人工号" v-model="recommend">
            </div>
          </div>
          <div class="form-group">
            <label  class="col-sm-4 control-label">企业全称：</label>
            <div class="col-sm-3">
              <input type="text" class="form-control" placeholder="请输入您的企业主体全称；例如：四川中新华搜信息技术有限公司；" v-model="enterpriseName">
              <br/>
              <br/>
              <small style="color: #999">申请申报服务处必须是以公司的名义进行申请，拒绝个人申请。</small>
            </div>
          </div>
          <div class="form-group">
            <label  class="col-sm-4 control-label"></label>
            <div class="col-sm-5">
              <button type="button" class="btn btn-success" style="height: 35px;" @click="submit" :disabled="isShowSubmit">提交</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import multipleUpload from '@/components/upload/multiple'
import area from '@/components/area/area'
import registerHead from '@/components/header/register'
import { putBaseinfo, getBaseinfo } from '@/config/api/declare-api'
import { validate } from '@/config/validator'

export default {
  name: 'step2',
  data () {
    return {
      showImg: false,
      imgSrc: '',
      name: '',
      idNumber: '',
      idFrontUrl: '',
      initFrontUrl: '',
      idBackUrl: '',
      initBackUrl: '',
      address: '',
      liveAddress: '',
      applyAddress: '',
      enterpriseName: '',
      organizAddress: '',
      areacode: '',
      isShowSubmit: false,
      recommend: '',
      disabled: false,
      list: [],
      reason: null
    }
  },
  components: {
    'v-multiple-upload': multipleUpload,
    'v-area': area,
    'v-register-head': registerHead
  },
  methods: {
    frontUrl (d) {
      this.idFrontUrl = d
    },
    backUrl (d) {
      this.idBackUrl = d
    },
    setLiveAddress (d) {
      this.liveAddress = d
    },
    setApplyAddress (d) {
      this.applyAddress = d
    },
    @validate()
    submit () {
      const param = {}
      param.name = this.name
      param.idNumber = this.idNumber
      param.idFrontUrl = this.idFrontUrl
      param.idBackUrl = this.idBackUrl
      param.companyName = this.enterpriseName
      param.liveAddress = this.liveAddress
      param.address = this.address
      if (this.$route.params.type === '1') {
        param.applyAddress = this.applyAddress
      }
      param.recommend = this.recommend
      this.isShowSubmit = true
      putBaseinfo(param).then(() => this.$router.push('/step3')).catch(() => {
        this.isShowSubmit = false
      })
    }
  },
  mounted () {
    if (this.$route.params.type === '1') {
      return
    }
    getBaseinfo().then(d => {
      this.name = d.name
      this.idNumber = d.idNumber
      this.idFrontUrl = d.idFrontUrl
      this.idBackUrl = d.idBackUrl
      this.initFrontUrl = d.idFrontUrl
      this.initBackUrl = d.idBackUrl
      this.recommendName = d.recommentName
      this.recommendOrgnizId = d.recommendOrgnizId
      this.recommendOrgnizType = d.recommendOrgnizType
      this.enterpriseName = d.organizName
      this.liveAddress = d.liveAddress
      this.address = d.address
      this.applyAddress = d.applyAddress
      this.organizAddress = d.organizAddress
      this.areacode = `${d.liveProvice},${d.liveCity},${d.liveDistrict}`
      this.reason = d.reason
      this.disabled = true
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
