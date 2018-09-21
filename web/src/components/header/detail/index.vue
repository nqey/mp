<template>
  <div>
    <div class="col-12 step_head">
      <router-link to="/login"><img :src="logo" class="step_title_logo"/></router-link>
      <h3 class="step_title">CPS 申报服务处自主管理平台</h3>
      <router-link to="/login"><button class="btn dl">登录</button></router-link>
    </div>
    <div class="col-12 sq">
      <div>
        <h3 v-if="type === '1'">
          <p>1、积极学习关于“防伪溯源产业升级”的相关国家政策，熟知中国商品诚信数据库全部工作流程及要求；</p>
          <p>2、积极宣讲“防伪溯源产业升级”国家政策，调动全部资源协助源头生产型企业加入中国商品诚信数据库。</p>
          <p>3、积极参加、配合上级部门组织的各项学习活动和各种招商会议。</p>
          <p>4、服务好未入库和已入库的企业，积极收集和反馈企业需求并及时上报。</p>
        </h3>
        <h3 v-else-if="type === '2'">
          <p>1、组织管辖内的申报官强化学习市场拓展、会议召开、讲师培训、入库企业洽谈等服务技能；</p>
          <p>2、每周组织两次沙龙，招募申报官，宣传普及中国商品诚信数据库、中华搜的运用； </p>
          <p>3、服务所辖区内入库企业，帮助企业应用数据库各项数据、网上商城数据分析，为入库企业经营活动提供营销策略依据；</p>
          <p>4、积极响应并配合中心、省级服务中心召开的大型会议的各项工作；</p>
          <p>5、实时向直接上级省级服务中心反馈申报官工作开展状况、企业入库状况，即时与省级申报机构分享、沟通市场中的喜讯、市场拓展好案例及遇到的困难和问题。</p>
        </h3>
        <h3 v-else-if="type === '3'">
          <p>1、省级服务中心按公司标准课件及关键言词，统一培训及考核申报官，中心抽查后授权申报官身份；若暂未设省级服务中心的省，由中心根据地域需要，抽选合格的申报服务处指定培训考核，对申报官培训及考核后的申报官，中心抽查后授权身份及权限。</p>
          <p>2、定期组织本省诚信商品数据库、防伪溯源高峰论坛等大型会议； </p>
          <p>3、组织管辖内的申报服务处学习市场拓展、会议召开、讲师培训、入库企业洽谈等服务技能；</p>
          <p>4、协助并指导各申报服务处，定期组织每周沙龙。</p>
          <p>5、服务辖区内入库企业，帮助企业应用数据库各项数据、网上商城数据分析，为入库企业经营活动提供营销策略依据；</p>
          <p>6、招开入库企业培训会，普及中国商品诚信数据库、中华搜的运用；</p>
          <p>7、及时上传下达中心决策、新的动向，实时向中心反馈申报官工作开展状况、企业入库状况，为中心市场阶段决策提供依据。</p>
        </h3>
      </div>
    </div>
    <!-- 模态框（Modal） -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title" id="myModalLabel">
              提示
            </h4>
          </div>
          <div class="modal-body center" v-if="this.type === '2'">
            市级暂时未开放线上申请，如需申请请来电400-8822-011。
          </div>
          <div class="modal-body center" v-if="this.type === '3'">
            省级暂时未开放线上申请，如需申请请来电400-8822-011。
          </div>
        </div>
      </div>
    </div><!-- Modal -->
  </div>
</template>

<script>
import logo from '@/assets/img/logo.png'

export default {
  name: 'detailHead',
  props: {
    type: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      logo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import 'index.scss'
</style>
