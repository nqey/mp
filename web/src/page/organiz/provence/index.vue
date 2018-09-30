<template>
  <div>
    <v-error-info :errMsg="errMsg"></v-error-info>
    <v-register-head :step="stepCode"></v-register-head>
    <div class="index_more">
      <div class="index_chunk">
        <div class="t_nav">&#12288;{{isEdit ? title[1] : title[0]}}</div>
      <hr>
      <div class="form-inline clearfix">
        <div class="form-group col-sm-5 txr">
          <label class="label_height"><span class="info">*</span> 负责人姓名：</label>
        </div>
        <div class="form-group col-sm-7 imb">
          <input type="text" class="form-control iw600" placeholder="请输入负责人姓名" v-model="charger_name" val-required>
          <br/>
          &#12288;<small class="areafc">请输入真实姓名，与营业执照上相同</small>
        </div>
        <!-- 公司名称 -->
        <div class="form-group col-sm-5 txr">
          <label class="label_height"><span class="info">*</span> 公司名称：</label>
        </div>
        <div class="form-group col-sm-7 imb">
          <input type="text" class="form-control iw600" placeholder="请输入公司全称" v-model="company_name" val-required>
          <br/>
          &#12288;<small class="areafc">例如：四川中新华搜信息技术有限公司</small>
        </div>
        <!-- ********* -->
        <div class="form-group col-sm-5 txr clearfix">
          <label class="label_height"><span class="info">*</span> 手机号码：</label>
        </div>
        <div class="form-group col-sm-7 imb">
          <input type="text" class="form-control iw600" placeholder="请输入手机号码" v-model="cellphone" val-required val-cellphone :disabled="isEdit">
          <br/>
          &#12288;<small class="areafc">该手机号必须是负责人真实手机号码，每一个手机号码只能添加一名负责人。</small>
          <br/>
          <br/>
          <input type="text" class="form-control iw" placeholder="请输入验证码" v-model="code"  v-if="!isEdit">
          <button v-show="show" class="btn hqyzm"  @click="getCode" style="height: 34px;" v-if="!isEdit">获取验证码</button>
          <button v-show="!show" class="btn hqyzm" v-if="!isEdit">{{count}} s</button>
        </div>
        <!-- 密码 -->
        <div class="form-group col-sm-5 txr" v-if="!isEdit">
          <label class="label_height"><span class="info">*</span> 密码：</label>
        </div>
        <div class="form-group col-sm-7 imb" v-if="!isEdit">
          <input type="password" class="form-control iw600" placeholder="请输入密码" v-model="password" val-required val-password>
        </div>
        <!-- 推荐工号 -->
        <div class="form-group col-sm-5 txr" v-if="!isEdit">
          <label class="label_height"><span class="info"></span> 推荐人工号：</label>
        </div>
        <div class="form-group col-sm-7 imb" v-if="!isEdit">
          <input type="text" class="form-control iw600" placeholder="请输入推荐工号" v-model="recommend">
        </div>
        <div class="form-group col-sm-5 txr clearfix">
            <label class="label_height"><span class="info">*</span> 负责区域：</label>
        </div>
        <div class="form-group col-sm-7 imb">
           <v-area @acceptData="setAreaCode" type="3" :disabled="isEdit" :areacode="areaCode"></v-area>
        </div>
        <div class="form-group col-sm-5 txr">
          <label class="label_height"><span class="info">*</span> 详细地址：</label>
        </div>
        <div class="form-group col-sm-7 imb">
          <input type='text' class='form-control iw' placeholder='请输入详细地址' v-model="address" val-required>
        </div>
        <div class="form-group col-sm-5 txr clearfix">
          <label class="label_height"><span class="info">*</span> 法人身份证号码：</label>
        </div>
        <div class="form-group col-sm-7 imb">
          <input type="text" class="form-control iw600" placeholder="请输入身份证号码" v-model="idNumber" val-required val-id-card>
          <br/>
          &#12288;<small class="areafc">申报官真实有效身份证号码，每一个身份证号只能添加一名申报官。</small>
        </div>
        <div class="form-group col-sm-5 txr clearfix">
          <label class="label_height"><span class="info">*</span>&nbsp;法人身份证照片：</label>
        </div>
        <div class="form-group col-sm-7 imb">
          <small class="info2 label_height">请按照示例上传证件照片；支持格式：jpg、bmp、png、gif格式照片，大小不超2M。</small>
          <p></p>
          <small class="info label_height">请上传本人真实身份证，否则审核不通过。</small>
          <div class="clearfix"></div>
          <div class="pull-left" style="width: 200px;margin-right: 30px;">
            <v-multiple-upload len="1" uploadid="upload2" title="上传法人身份证正面" @acceptData="frontUrl" :imgSrc="idFrontUrl" val-required :val-value="idFrontUrl"></v-multiple-upload>
          </div>
          <div class="pull-left" style="width: 200px;">
            <v-multiple-upload len="1" uploadid="upload3" title="上传法人身份证背面" @acceptData="backUrl" :imgSrc="idBackUrl" val-required :val-value="idBackUrl"></v-multiple-upload>
          </div>
        </div>
        <div class="form-group col-sm-5 txr clearfix">
          <label class="label_height"><span class="info">*</span> 负责人尽职调查表：</label>
        </div>
        <div class="form-group col-sm-7 imb">
          <p class="label_height"><b>下载</b> <a class="fc" download :href="template.sbgjzdcb">负责人尽职调查表</a></p>
          <small class="info2 label_height">文件要求：上传加盖手印的原件照片或扫描件。支持格式：jpg、bmp、png、gif格式照片，大小不超2M。</small>
          <br/>
          <small class="info label_height">请认真填写每一必填项，再上传完整的尽职调查表</small>
          <br/>
          <br/>
          <v-multiple-upload len="1" title="上传尽职调查表" @acceptData="setChargerInvestigationUrl" uploadid="upload4" :imgSrc="chargerInvestigationUrl" val-required :val-value="chargerInvestigationUrl"></v-multiple-upload>
        </div>
        <!-- 单位职责调查 -->
        <div class="form-group col-sm-5 txr ">
          <label class="label_height"><span class="info">*</span>单位尽职调查表：</label>
        </div>
        <div class="form-group col-sm-7 imb">
          <p class="label_height"><b>下载</b> <a class="fc" download>单位尽职调查表</a></p>
          <small class="info2 label_height">文件要求：上传加盖手印的原件照片或扫描件。支持格式：jpg、bmp、png、gif格式照片，大小不超2M。</small>
          <br/>
          <small class="info label_height">请认真填写每一必填项，再上传完整的尽职调查表</small>
          <br/>
          <br/>
          <v-multiple-upload len="1" title="上传尽职调查表" @acceptData="setcompanyInvestigationUrl" uploadid="upload5" :imgSrc="companyInvestigationUrl" val-required :val-value="companyInvestigationUrl"></v-multiple-upload>
        </div>
        <!-- ********* -->
        <div class="form-group col-sm-5 txr clearfix">
          <label class="label_height"><span class="info">*</span> 承诺公函：</label>
        </div>
        <div class="form-group col-sm-7 imb">
          <p class="label_height"><b>下载</b> <a class="fc" download :href="template.sbgcngh">承诺公函</a></p>
          <small class="info2 label_height">文件要求：上传加盖手印的原件照片或扫描件。支持格式：jpg、bmp、png、gif格式照片，大小不超2M。</small>
          <br/>
          <small class="info label_height">请上传完整的承诺公函</small>
          <br/>
          <br/>
          <v-multiple-upload len="1" title="上传承诺公函" @acceptData="setPromiseLetterUrl" uploadid="upload6" :imgSrc="promiseLetterUrl" val-required :val-value="promiseLetterUrl"></v-multiple-upload>
        </div>
        <div class="form-group col-sm-5 txr clearfix">
          <label class="label_height"><span class="info">*</span> 申请公函：</label>
        </div>
        <div class="form-group col-sm-7 imb">
          <p class="label_height"><b>下载</b> <a class="fc" download :href="template.sbgcngh">申请公函</a></p>
          <small class="info2 label_height">文件要求：上传加盖手印的原件照片或扫描件。支持格式：jpg、bmp、png、gif格式照片，大小不超2M。</small>
          <br/>
          <small class="info label_height">请上传完整的申请公函</small>
          <br/>
          <br/>
          <v-multiple-upload len="1" title="上传申请公函" @acceptData="setApplyLetterUrl" uploadid="upload7"  :imgSrc="applyLetterUrl" val-required :val-value="applyLetterUrl"></v-multiple-upload>
        </div>
        <div class="form-group col-sm-5 txr clearfix">
          <label class="label_height"><span class="info">*</span> 营业执照</label>
        </div>
        <div class="form-group col-sm-7 imb">
          <small class="info2 label_height">文件要求：上传加盖手印的原件照片或扫描件。支持格式：jpg、bmp、png、gif格式照片，大小不超2M。</small>
          <br/>
          <small class="info label_height">请上传完整的营业执照</small>
          <br/>
          <br/>
          <v-multiple-upload len="1" title="上传营业执照" @acceptData="setBusinessLicenseUrl" uploadid="upload8" :imgSrc="businessLicenseUrl"></v-multiple-upload>
        </div>
        <div class="form-group col-sm-12 imb submit_btn">
          <button v-show="!isEdit" type="button" class="btn btn-success" style="height: 35px;" @click="submit">注册</button>
          <button v-show="isEdit" type="button" class="btn btn-success" style="height: 35px;" @click="edit">提交</button>
          <br/>
          <br/>
          <p class="areafc">注册信息需审核</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { getValidatecode } from '@/config/api/base-api'
import { postPublicsProvenceRegister, getOrganizProvenceId, putOrganizProvenceId } from '@/config/api/declare-api'
import { validate } from '@/config/validator'
import logo from '@/assets/img/logo.png'
import { EXCEL_SERVER_URL } from '@/config/api/env'

export default {
  name: 'addService',
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
      isShowSubmit: true,
      cellphone: '',
      password: '',
      recommend: '',
      charger_name: '',
      company_name: '',
      idNumber: '',
      idFrontUrl: '',
      idBackUrl: '',
      chargerInvestigationUrl: '',
      companyInvestigationUrl: '',
      promiseLetterUrl: '',
      applyLetterUrl: '',
      areaCode: '',
      address: null,
      code: '',
      errMsg: [],
      show: true, // 验证码相关
      count: '', // 验证码相关
      timer: null, // 验证码相关
      infoTimer: null, // 提示信息
      template: { // 资料下载
        sbgjzdcb: `${EXCEL_SERVER_URL}/template/sbgjzdcb.docx`,
        sbgcngh: `${EXCEL_SERVER_URL}/template/sbgcngh.docx`
      },
      logo,
      isEdit: false,
      title: ['省级服务中心注册', '省级服务中心基本信息修改'],
      businessLicenseUrl: '',
      state: '',
      stepCode: ''
    }
  },
  methods: {
    frontUrl (d) { // 身份证正面
      this.idFrontUrl = d
    },
    backUrl (d) { // 身份证背面
      this.idBackUrl = d
    },
    setAreaCode (d) { // 负责区域
      this.areaCode = d
    },
    setChargerInvestigationUrl (d) { // 负责人职责调查表
      this.chargerInvestigationUrl = d
    },
    setcompanyInvestigationUrl (d) { // 单位职责调查表
      this.companyInvestigationUrl = d
    },
    setPromiseLetterUrl (d) { // 承诺公函
      this.promiseLetterUrl = d
    },
    setApplyLetterUrl (d) { // 申请公函
      this.applyLetterUrl = d
    },
    setBusinessLicenseUrl (d) {
      this.businessLicenseUrl = d
    },
    getCode () {
      this.errMsg = []
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count -= 1
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
      // const res = await this.$http.get(`${DECLARE_GET_VALIDATECODE}addDeclarer/${this.cellphone}`)
      getValidatecode('regiset', this.cellphone)
    },
    // 初始化获取详细数据
    init (id) {
      getOrganizProvenceId(id).then(res => {
        this.charger_name = res.chargerName // 负责人
        this.company_name = res.companyName // 公司
        this.cellphone = res.cellphone // 手机
        this.idNumber = res.idNumber // 身份证
        this.idFrontUrl = res.idFrontUrl // 身份证正面
        this.idBackUrl = res.idBackUrl // 省份证反面
        this.chargerInvestigationUrl = res.chargerInvestigationUrl // 负责人职责调查
        this.companyInvestigationUrl = res.companyInvestigationUrl // 单位职责调查
        this.promiseLetterUrl = res.promiseLetterUrl // 承诺公函
        this.applyLetterUrl = res.applyLetterUrl // 申请公函
        this.areaCode = res.areaCode // 地区
        this.address = res.address // 地址
        this.businessLicenseUrl = res.businessLicenseUrl // 营业执照
        switch (res.state) {
          case 'unpass':
            this.stepCode = 2
            break
          case 'waitPending':
            this.stepCode = 5
            break
          case 'waitAudit':
            this.stepCode = 5
            break
        }
      })
    },
    // 省级修改
    @validate()
    edit () {
      const obj = {}
      const id = window.sessionStorage.getItem('provience_id')
      obj.chargerName = this.charger_name // 负责人
      obj.companyName = this.company_name
      obj.cellphone = this.cellphone // 手机
      obj.idNumber = this.idNumber // 身份证
      obj.idFrontUrl = this.idFrontUrl // 身份证正面
      obj.idBackUrl = this.idBackUrl // 省份证反面
      obj.chargerInvestigationUrl = this.chargerInvestigationUrl // 负责人职责调查
      obj.companyInvestigationUrl = this.companyInvestigationUrl // 单位职责调查
      obj.promiseLetterUrl = this.promiseLetterUrl // 承诺公函
      obj.applyLetterUrl = this.applyLetterUrl // 申请公函
      obj.areaCode = this.areaCode // 地区
      obj.address = this.address // 地址
      obj.businessLicenseUrl = this.businessLicenseUrl
      putOrganizProvenceId(id, obj).then(res => {
        if (res.success) {
          this.$router.push('/organiz/provence/message')
          this.stepCode = 5
        }
      })
    },
    @validate()
    submit () {
      const obj = {}
      obj.chargerName = this.charger_name // 负责人
      obj.companyName = this.company_name
      obj.code = this.code // 验证码
      obj.cellphone = this.cellphone // 手机
      obj.password = this.password
      obj.recommend = this.recommend
      obj.idNumber = this.idNumber // 身份证
      obj.idFrontUrl = this.idFrontUrl // 身份证正面
      obj.idBackUrl = this.idBackUrl // 省份证反面
      obj.chargerInvestigationUrl = this.chargerInvestigationUrl // 负责人职责调查
      obj.companyInvestigationUrl = this.companyInvestigationUrl // 单位职责调查
      obj.promiseLetterUrl = this.promiseLetterUrl // 承诺公函
      obj.applyLetterUrl = this.applyLetterUrl // 申请公函
      obj.areaCode = this.areaCode // 地区
      obj.address = this.address // 地址
      obj.businessLicenseUrl = this.businessLicenseUrl
      if (this.errMsg.length !== 0) {
        clearTimeout(this.infoTimer)
        this.infoTimer = setTimeout(() => { this.errMsg = [] }, 3000)
        return
      }
      // const res = await this.$http.post(DECLARE_POST_DECLARER, obj)
      postPublicsProvenceRegister(obj).then((res) => {
        sessionStorage.setItem('title', '添加省级服务中心')
        sessionStorage.setItem('content', '添加省级服务中心成功')
        sessionStorage.setItem('content2', '')
        sessionStorage.setItem('content3', '')
        sessionStorage.setItem('alink', '/officer/entry')
        sessionStorage.setItem('blink', '/officer/list')
        sessionStorage.setItem('clink', '')
        if (res.success) {
          this.$router.push('/organiz/provence/message')
          this.stepCode = 5
        } else {
          this.errMsg.push('注册失败')
        }
      }).catch((err) => {
        if (err) {
          console.log(err)
        }
      })
    }
  },
  watch: {},
  components: {
    'v-multiple-upload': () => import('@/components/upload/multiple'),
    'v-error-info': () => import('@/components/info/error'),
    'v-area': () => import('@/components/area/area'),
    'v-register-head': () => import('@/components/header/register')
  },
  beforeCreate () {
  },
  cteated () {
  },
  beforeMount () {
  },
  mounted () {
    if (this.$route.path.split('/').indexOf('edit') > -1) {
      const id = window.sessionStorage.getItem('provience_id')
      this.isEdit = true
      this.init(id)
      this.stepCode = 2
    } else {
      this.stepCode = 1
    }
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
