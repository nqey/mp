<template>
  <div>
    <div class="index_more">
      <div class="index_chunk">
        <div class="t_nav">&#12288;申报企业</div>
        <hr>
        <div class="form-inline clearfix">
          <div class="form-group col-sm-2 txr">
            <label class="label_height"><span class="info">*</span>企业全称：</label>
          </div>
          <div class="form-group col-sm-10 imb">
            <input type="text" class="form-control iw600" placeholder="请输入企业全称" v-model="name" val-required>
            <br/>
            <br/>
            &#12288;<small class="areafc">例如：四川中新华搜信息技术有限公司</small>
          </div>
          <div class="form-group col-sm-2 txr clearfix">
            <label class="label_height"><span class="info">*</span> 企业法人：</label>
          </div>
          <div class="form-group col-sm-10 imb">
            <input type="text" class="form-control iw600" placeholder="请输入真实姓名" v-model="charger" val-required>
            <br/>
            <br/>
            &#12288;<small class="areafc">企业法人必须是真实姓名，与营业执照上相同</small>
          </div>
          <div class="form-group col-sm-2 txr clearfix">
            <label class="label_height"><span class="info">*</span> 手机号码：</label>
          </div>
          <div class="form-group col-sm-10 imb ">
            <input type="text" class="form-control iw600" placeholder="请输入手机号码" v-model="cellphone" val-required val-cellphone>
            <br/>
            <br/>
            &#12288;<small class="areafc">该号码必须是企业法人本人手机号码</small>
          </div>
          <div class="form-group col-sm-2 txr clearfix">
            <label class="label_height"><span class="info">*</span> 身份证号码：</label>
          </div>
          <div class="form-group col-sm-10 imb">
            <input type="text" class="form-control iw600" placeholder="请输入身份证号码" v-model="idNumber" val-required>
            <br/>
            <br/>
            &#12288;<small class="areafc">申报官真实有效的身份证号码，一张身份证只能注册一名申报官。</small>
          </div>
          <div class="form-group col-sm-2 txr clearfix">
            <label class="label_height"><span class="info">*</span>身份证照片：</label>
          </div>
          <div class="form-group col-sm-10 imb">
            <small class="info2 label_height areafc">请按照示例上传证件照片；支持格式：jpg、bmp、png、gif格式照片，大小不超2M。</small>
            <br/>
            <small class="info label_height">请上传企业法人真实身份证，否则审核不通过。</small>
            <div class="clearfix"></div>
            <div class="pull-left" style="width: 200px;margin-right: 30px;">
              <v-multiple-upload len="1" uploadid="upload1" title="上传正面" @acceptData="frontUrl"></v-multiple-upload>
            </div>
            <div class="pull-left" style="width: 200px;">
              <v-multiple-upload len="1" uploadid="upload2" title="上传背面" @acceptData="backUrl"></v-multiple-upload>
            </div>
          </div>
          <div class="form-group col-sm-2 txr clearfix">
            <label class="label_height"><span class="info">*</span> 营业执照：</label>
          </div>
          <div class="form-group col-sm-10 imb">
            <p class="label_height">请上传企业营业执照影印件。支持格式：bmp、jpg、png、gif。照片大小不超过2M。</p>
            <br/>
            <v-multiple-upload len="1" title="上传营业执照" @acceptData="setLicenseImageUrl" uploadid="upload3"></v-multiple-upload>
          </div>
          <div class="form-group col-sm-2 txr clearfix">
            <label class="label_height"><span class="info">*</span> 生产许可证：</label>
          </div>
          <div class="form-group col-sm-10 imb">
            <p class="label_height">请上传企业生产许可证影印件。支持格式：bmp、jpg、png、gif。照片大小不超过2M。</p>
            <br/>
            <v-multiple-upload len="1" title="上传生产许可证" @acceptData="setProductionImageUrl" uploadid="upload4"></v-multiple-upload>
          </div>
          <div class="form-group col-sm-2 txr clearfix">
            <label class="label_height"><span class="info">*</span> 资金补贴申报表：</label>
          </div>
          <div class="form-group col-sm-10 imb">
            <p class="label_height"><b>下载</b> <a download :href="template.zxbtzjsbb" class="fc">申报表</a><img :src="xiazaiIcon"></p>
            <small class="info2 label_height">文件要求：上传加盖手印的原件照片或扫描件。支持格式：jpg、bmp、png、gif格式照片，大小不超2M。</small>
            <br/>
            <small class="info label_height">请认真填写每一必填项，再上传完整的资金补贴申报表</small>
            <br/>
            <br/>
            <v-multiple-upload len="5" title="上传申报表" @acceptData="setCapitalImageUrl" uploadid="upload5"></v-multiple-upload>
          </div>
          <div class="form-group col-sm-2 txr clearfix">
            <label class="label_height"><span class="info">*</span> 企业尽职调查表：</label>
          </div>
          <div class="form-group col-sm-10 imb">
            <p class="label_height"><b>下载</b> <a download :href="template.sbqyjzdcb"  class="fc">尽职调查表</a><img :src="xiazaiIcon"></p>
            <small class="info2 label_height">文件要求：上传加盖手印的原件照片或扫描件。支持格式：jpg、bmp、png、gif格式照片，大小不超2M。</small>
            <br/>
            <small class="info label_height">请认真填写每一必填项，再上传完整的尽职调查表</small>
            <br/>
            <br/>
            <v-multiple-upload len="5" title="上传调查表" @acceptData="setEnterpriseSurveyImageUrl" uploadid="upload6"></v-multiple-upload>
          </div>
          <div class="form-group col-sm-2 txr clearfix">
            <label class="label_height"><span class="info">*</span> 企业负责人尽职调查表：</label>
          </div>
          <div class="form-group col-sm-10 imb">
            <p class="label_height"><b>下载</b> <a download :href="template.sbqyfzrjzdcb" class="fc">尽职调查表</a><img :src="xiazaiIcon"></p>
            <small class="info2 label_height">文件要求：上传加盖手印的原件照片或扫描件。支持格式：jpg、bmp、png、gif格式照片，大小不超2M。</small>
            <br/>
            <small class="info label_height">请认真填写每一必填项，再上传完整的尽职调查表</small>
            <br/>
            <br/>
            <v-multiple-upload len="5" title="上传调查表" @acceptData="setEnterpriseChargerSurveyImageUrl" uploadid="upload7"></v-multiple-upload>
          </div>
          <div class="form-group col-sm-2 txr clearfix">
            <label class="label_height"><span class="info">*</span> 企业入库申请函：</label>
          </div>
          <div class="form-group col-sm-10 imb">
            <p class="label_height"><b>下载</b> <a download :href="template.qysqrkh" class="fc">申请函</a><img :src="xiazaiIcon"></p>
            <small class="info2 label_height">文件要求：上传加盖手印的原件照片或扫描件。支持格式：jpg、bmp、png、gif格式照片，大小不超2M。</small>
            <br/>
            <small class="info label_height">请上传完整的申请函</small>
            <br/>
            <br/>
            <v-multiple-upload len="1" title="上传申请函" uploadid="upload8" text="上传申请函" @acceptData="setEnterpriseShindImageUrl"></v-multiple-upload>
          </div>
          <div class="form-group col-sm-2 txr clearfix">
            <label class="label_height">授权委托书：</label>
          </div>
          <div class="form-group col-sm-10 imb">
            <p class="label_height"><b>下载</b> <a download :href="template.zddbhzgtwtdlrsqwts" class="fc">委托书</a><img :src="xiazaiIcon"></p>
            <small class="info2 label_height">指定代表或者共同委托代理人授权委托书；如企业法人不能亲自办理入库事宜，法人可签订此授权书委托书给指定负责人进行办理。支持格式：jpg、bmp、png、gif格式照片，大小不超2M。</small>
            <br/>
            <br/>
            <v-multiple-upload len="1" uploadid="upload9" title="上传委托书" @acceptData="setAuthorizationImageUrl"></v-multiple-upload>
          </div>
          <div class="form-group col-sm-2 txr clearfix">
            <label class="label_height"> 其他补充材料：</label>
          </div>
          <div class="form-group col-sm-10 imb">
            <small class="info2 label_height">企业如有其他补充材料，可上传至此，最多5张，可增加通过率;例如发明专利、商标等知识产权；各项奖励证书，等级证书，认证证书等；如企业有全国工业生产许可证，安全生产许可证也需上传至此。 </small>
            <br/>
            <br/>
            <v-multiple-upload len="5" title="上传补充材料" @acceptData="setOtherImageUrl" uploadid="upload10"></v-multiple-upload>
          </div>
          <div class="form-group col-sm-2 txr clearfix"></div>
          <div class="form-group col-sm-10 imb">
            <button v-show="isShowSubmit" type="button" class="btn btn-success" style="height: 35px;" @click="submit">确认</button>
            <button v-show="!isShowSubmit" type="button" class="btn btn-success" style="height: 35px;" disabled>确认</button>
            <br/>
            <br/>
            <p class="areafc">&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#32;申报企业需审核</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import multipleUpload from '@/components/upload/multiple'
import { addEnterprise } from '@/config/api/declare-api'
import { EXCEL_SERVER_URL } from '@/config/api/env'
import xiazaiIcon from '@/assets/img/xiazaiIcon.gif'
import { validate } from '@/config/validator'

export default {
  name: 'enterprise',
  data () {
    return {
      showImg: false,
      isShowSubmit: true,
      name: '',
      charger: '',
      cellphone: '',
      idNumber: '',
      idFrontUrl: '',
      idBackUrl: '',
      licenseImageUrl: '',
      productionImageUrl: '',
      capitalImageUrl: '',
      enterpriseSurveyImageUrl: '',
      enterpriseChargerSurveyImageUrl: '',
      enterpriseShindImageUrl: '',
      authorizationImageUrl: '',
      otherImageUrl: '',
      xiazaiIcon,
      timer: '',
      template: {
        zxbtzjsbb: `${EXCEL_SERVER_URL}/template/zxbtzjsbb.docx`,
        qysqrkh: `${EXCEL_SERVER_URL}/template/qysqrkh.docx`,
        zddbhzgtwtdlrsqwts: `${EXCEL_SERVER_URL}/template/zddbhzgtwtdlrsqwts.docx`,
        sbqyjzdcb: `${EXCEL_SERVER_URL}/template/sbqyjzdcb.docx`,
        sbqyfzrjzdcb: `${EXCEL_SERVER_URL}/template/sbqyfzrjzdcb.docx`,
        sbjgjzdcb: `${EXCEL_SERVER_URL}/template/sbjgjzdcb.docx`,
        sbjgcngh: `${EXCEL_SERVER_URL}/template/sbjgcngh.docx`,
        sbjgfzrjzdcb: `${EXCEL_SERVER_URL}/template/sbjgfzrjzdcb.docx`
      }
    }
  },
  computed: {},
  methods: {
    frontUrl (d) {
      this.idFrontUrl = d
    },
    backUrl (d) {
      this.idBackUrl = d
    },
    setLicenseImageUrl (d) {
      this.licenseImageUrl = d
    },
    setProductionImageUrl (d) {
      this.productionImageUrl = d
    },
    setCapitalImageUrl (d) {
      this.capitalImageUrl = d
    },
    setEnterpriseSurveyImageUrl (d) {
      this.enterpriseSurveyImageUrl = d
    },
    setEnterpriseChargerSurveyImageUrl (d) {
      this.enterpriseChargerSurveyImageUrl = d
    },
    setEnterpriseShindImageUrl (d) {
      this.enterpriseShindImageUrl = d
    },
    setAuthorizationImageUrl (d) {
      this.authorizationImageUrl = d
    },
    setOtherImageUrl (d) {
      this.otherImageUrl = d
    },
    @validate()
    async submit () {
      const param = {}
      param.name = this.name
      param.charger = this.charger
      param.cellphone = this.cellphone
      param.idNumber = this.idNumber
      param.idFrontUrl = this.idFrontUrl
      param.idBackUrl = this.idBackUrl
      param.licenseImageUrl = this.licenseImageUrl
      param.productionImageUrl = this.productionImageUrl
      param.capitalImageUrl = this.capitalImageUrl
      param.enterpriseSurveyImageUrl = this.enterpriseSurveyImageUrl
      param.enterpriseChargerSurveyImageUrl = this.enterpriseChargerSurveyImageUrl
      param.enterpriseShindImageUrl = this.enterpriseShindImageUrl
      param.authorizationImageUrl = this.authorizationImageUrl
      param.otherImageUrl = this.otherImageUrl
      this.isShowSubmit = false
      addEnterprise(param).then(res => {
        this.isShowSubmit = !this.isShowSubmit
        sessionStorage.setItem('title', '添加申报企业')
        sessionStorage.setItem('content', '企业申报提交成功')
        sessionStorage.setItem('content2', '审核时长3个工作日以内，企业审核状态可在企业列表查看')
        sessionStorage.setItem('content3', '审核结果将以短信的方式发送至企业法人手机')
        sessionStorage.setItem('alink', '')
        sessionStorage.setItem('blink', '')
        sessionStorage.setItem('clink', '/decEnt/entry')
        this.$router.push('/message')
      }).catch(() => { this.isShowSubmit = true })
    }
  },
  components: {
    'v-multiple-upload': multipleUpload
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
