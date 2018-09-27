<template>
  <div class="index_more">
    <v-error-info :errMsg="errMsg"></v-error-info>
      <div class="index_chunk">
    <div class="t_nav">&#12288;企业详情</div>
      <hr/>
      <div class="form-inline clearfix">
        <div class="form-group col-sm-2 txr">
          <label class="label_height">企业全称：</label>
        </div>
        <div class="form-group col-sm-10">
          <span class="label_height">{{name}}&#12288;&#12288;</span>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-sm-2 txr">
          <label class="label_height">企业法人：</label>
        </div>
        <div class="form-group col-sm-10">
          <span class="label_height">{{charger}}&#12288;&#12288;</span>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-sm-2 txr">
          <label class="label_height">手机号码：</label>
        </div>
        <div class="form-group col-sm-10">
          <span class="label_height">{{cellphone}}&#12288;&#12288;</span>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-sm-2 txr">
          <label class="label_height">身份证号码：</label>
        </div>
        <div class="form-group col-sm-10 imb">
          <span class="label_height">{{idNumber}}&#12288;&#12288;</span>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-sm-2 txr">
          <label class="label_height">身份证照片：</label>
        </div>
        <div class="form-group col-sm-10 imb">
          <div class="pull-left" style="width: 200px;margin-right: 30px;">
            <v-img :imgSrc="idFrontUrl"></v-img>
          </div>
          <div class="pull-left" style="width: 200px;">
            <v-img :imgSrc="idBackUrl"></v-img>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-sm-2 txr">
          <label class="label_height">营业执照：</label>
        </div>
        <div class="form-group col-sm-10 imb">
          <v-img :imgSrc="licenseImageUrl"></v-img>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-sm-2 txr">
          <label class="label_height">生产许可证：</label>
        </div>
        <div class="form-group col-sm-10 imb">
          <v-img :imgSrc="productionImageUrl"></v-img>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-sm-2 txr">
          <label class="label_height">资金补贴申报表：</label>
        </div>
        <div class="form-group col-sm-10 imb">
          <div class="pull-left" v-for="(url, index) of capitalImageUrls" :key="index">
            <v-img :imgSrc="url"></v-img>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-sm-2 txr">
          <label class="label_height">企业尽职调查表：</label>
        </div>
        <div class="form-group col-sm-10 imb">
          <div class="pull-left" v-for="(url, index) of enterpriseSurveyImageUrls" :key="index">
            <v-img :imgSrc="url"></v-img>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-sm-2 txr">
          <label class="label_height">企业负责人尽职调查表：</label>
        </div>
        <div class="form-group col-sm-10 imb">
          <div class="pull-left" v-for="(url, index) of enterpriseChargerSurveyImageUrls" :key="index">
            <v-img :imgSrc="url"></v-img>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-sm-2 txr">
          <label class="label_height">企业入库申请函：</label>
        </div>
        <div class="form-group col-sm-10 imb">
          <v-img :imgSrc="enterpriseShindImageUrl"></v-img>
        </div>
        <div class="clearfix" v-show="authorizationImageUrl"></div>
        <div class="form-group col-sm-2 txr" v-show="authorizationImageUrl">
          <label class="label_height">授权委托书：</label>
        </div>
        <div class="form-group col-sm-10 imb" v-show="authorizationImageUrl">
          <v-img :imgSrc="authorizationImageUrl"></v-img>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-sm-2 txr">
          <label class="label_height">其他补充材料：</label>
        </div>
        <div class="form-group col-sm-10 imb">
          <div class="pull-left" v-for="(url, index) of otherImageUrls" :key="index">
            <v-img :imgSrc="url"></v-img>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vimg from '@/components/img/img'
import { getOrganizEnterpriseId } from '@/config/api/declare-api'
import errInfo from '@/components/info/error'

export default {
  name: 'detail',
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
      name: '',
      charger: '',
      cellphone: '',
      idNumber: '',
      idFrontUrl: '',
      idBackUrl: '',
      licenseImageUrl: '',
      productionImageUrl: '',
      capitalImageUrl: '',
      capitalImageUrls: [],
      enterpriseSurveyImageUrl: '',
      enterpriseSurveyImageUrls: [],
      enterpriseChargerSurveyImageUrl: '',
      enterpriseChargerSurveyImageUrls: [],
      enterpriseShindImageUrl: '',
      authorizationImageUrl: '',
      otherImageUrl: '',
      otherImageUrls: [],
      state: '',
      reason: '',
      errMsg: []
    }
  },
  computed: {},
  methods: {
    async init () {
      const id = this.$route.params.id
      // const res = await this.$http.get(`${DECLARE_GET_ENTERPRISE_ID}${id}`)
      getOrganizEnterpriseId(id).then(res => {
        this.name = res.name
        this.charger = res.charger
        this.cellphone = res.cellphone
        this.idNumber = res.idNumber
        this.idFrontUrl = res.idFrontUrl
        this.idBackUrl = res.idBackUrl
        this.licenseImageUrl = res.licenseImageUrl
        this.productionImageUrl = res.productionImageUrl
        this.capitalImageUrl = res.capitalImageUrl
        if (res.capitalImageUrl) {
          this.capitalImageUrls = res.capitalImageUrl.split(',')
        }
        this.enterpriseSurveyImageUrl = res.enterpriseSurveyImageUrl
        if (res.enterpriseSurveyImageUrl) {
          this.enterpriseSurveyImageUrls = res.enterpriseSurveyImageUrl.split(',')
        }
        this.enterpriseChargerSurveyImageUrl = res.enterpriseChargerSurveyImageUrl
        if (res.enterpriseChargerSurveyImageUrl) {
          this.enterpriseChargerSurveyImageUrls = res.enterpriseChargerSurveyImageUrl.split(',')
        }
        this.enterpriseShindImageUrl = res.enterpriseShindImageUrl
        this.authorizationImageUrl = res.authorizationImageUrl
        this.otherImageUrl = res.otherImageUrl
        if (res.otherImageUrl) {
          this.otherImageUrls = res.otherImageUrl.split(',')
        }
        this.state = res.state
        this.reason = res.reason
        if (this.reason) {
          this.errMsg.push(this.reason)
        }
      })
      // ************
    }
  },
  watch: {},
  components: {
    'v-img': vimg,
    'v-error-info': errInfo
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
  @import 'index.scss'
</style>
