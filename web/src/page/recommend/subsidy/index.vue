<template>
  <div class="index_more">
    <div class="index_chunk">
        <div class="t_nav">&#12288;申请提现</div>
        <hr/>
        <br>
        <div class="row">
          <div class="col-sm-7">
            <form class="form-horizontal">
              <div class="form-group">
                <label class="col-sm-2 control-label">提现金额</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control yyyy"  placeholder="请输入金额" disabled v-model="money">
                  <small class="ssss">平台将冻结可申请补贴总金额的10%，请申请人补交企业普通发票，<br/>并邮寄至我中心，财务确认后将其10%拨付至绑定银行卡中。<br/>邮寄地址：四川省成都市双流区蛟龙港海港广场15座9层，<br/>联系电话：15608507181  <br/>收件人：商品数据库服务中心  。 <br/>发票类型建议开具广告类发票</small>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">开户名</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" placeholder="请输入开户名" v-model="form.name">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">开户行</label>
                <div class="col-sm-10">
                  <select class="form-control" v-model="form.bankId">
                    <option v-for="(v, i) of bankList" :value="v.id" :key="i">{{v.name}}</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">支行</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" placeholder="请精确到支行名称，否则无法到账" v-model="form.bankBranch">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">开户行账号</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" placeholder="请输入银行账号" v-model="form.bankCard">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">手机号码</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" placeholder="请输入手机号" v-model="form.cellphone">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">验证码</label>
                <div class="col-sm-10">
                  <div class="row">
                    <div class="col-sm-10">
                      <input type="text" class="form-control" placeholder="请输入手机验证码" v-model="form.code">
                    </div>
                    <div class="col-sm-2">
                      <button type="button" class="btn btn-primary" @click="sendMsg" :disabled="isDisabled">{{buttonName}}</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button type="button" class="btn btn-primary" style="width: 100%" @click="commit">确认提现</button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-sm-offset-1 col-sm-4">
            <div class="row">
              <div class="col-sm-12" style="margin-left: -15px">
                选择已添加银行卡
              </div>
            </div>
            <div class="card row" v-for="(item, i) of data" tabindex="-1" @click="setTi(item)" :key="i">
              <div class="col-sm-3" style="margin-right: -15px">
                <img :src="getPictureUrl(item.logo, { w: 40, h: 40, q: 40 })">
              </div>
              <div class="col-sm-9">
                <div>{{item.name}}</div>
                <div>储蓄卡</div>
                <div style="margin-top: 20px">{{item.account}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { getValidatecode } from '@/config/api/base-api'
import { applySubsidy, organizDeclarerRecommendAmount, getOrganizSubsidyBank, getBankList } from '@/config/api/declare-api'
import { getPictureUrl } from '@/config/utils'

export default {
  name: 'apply_subsidy',
  data () {
    return {
      bankList: [],
      buttonName: '发送验证码',
      isDisabled: false,
      time: 60,
      form: {
        bankId: null,
        bankBranch: null,
        name: null,
        bankCard: null,
        cellphone: null,
        code: null
      },
      money: 0,
      data: [],
      getPictureUrl
    }
  },
  methods: {
    setTi (d) {
      this.form.bankId = d.bankId
      this.form.bankBranch = d.bankName
      this.form.name = d.name
      this.form.cellphone = d.cellphone
      this.form.bankCard = d.account
    },
    async getBank () {
      this.data = await getOrganizSubsidyBank()
      const d = (this.data[0] || {})
      this.form.bankId = d.bankId
      this.form.bankBranch = d.bankName
      this.form.name = d.name
      this.form.cellphone = d.cellphone
      this.form.bankCard = d.account
    },
    async getBankList () {
      this.bankList = await getBankList()
      this.form.bankId = this.bankList[0].id
    },
    async getMoney () {
      this.money = await organizDeclarerRecommendAmount()
    },
    async sendMsg () {
      const me = this
      me.isDisabled = true
      const interval = window.setInterval(() => {
        me.buttonName = me.time
        me.time -= 1
        if (me.time < 0) {
          me.buttonName = '重新发送'
          me.time = 60
          me.isDisabled = false
          window.clearInterval(interval)
        }
      }, 1000)
      await getValidatecode('withaw', this.form.cellphone)
    },
    commit () {
      this.$router.push('/subsidy/successful')
      applySubsidy(this.form).then(() => this.$router.push('/subsidy/successful'))
    }
  },
  mounted () {
    this.getMoney()
    this.getBank()
    this.getBankList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
