<template>
  <div class="plat-content" style="margin-left: 17%;margin-right: 30px;padding-top: 100px;">
    <div class="plat-content-con">
      <div class="index-main-left-content">
        <!-- 粉丝开始 -->
        <p class="jrsj_bj">粉丝</p>
        <div class="index-main-left-section-content row index-fans">
          <ul class="row clearfix">
            <li class="col-sm-3 text-center">
              <div class="index-fans1">
                <p>新增关注人数</p>
                <h3 class="timer timer-fans count-title">{{fc.fc1}}</h3>
              </div>
            </li>
            <li class="col-sm-3 text-center">
              <div class="index-fans2">
                <p>取消关注人数</p>
                <h3 class="timer timer-fans count-title">{{fc.fc2}}</h3>
              </div>
            </li>
            <li class="col-sm-3 text-center">
              <div class="index-fans3">
                <p>净增关注人数</p>
                <h3 class="timer timer-fans count-title">{{fc.fc3}}</h3>
              </div>
            </li>
            <li class="col-sm-3 text-center">
              <div class="index-fans4">
                <p>累积关注人数</p>
                <h3 class="timer timer-fans count-title">{{fc.fc4}}</h3>
              </div>
            </li>
          </ul>
          <!--关键指标图-->
          <div class="index-indicatrix">
            <h4>关键指标图</h4>
            <ul class="nav clearfix zbBtn">
              <div class="pull-left right_y">指标</div>
              <li :class="{li: true, 'current':indexFlag==0}" @click="indexLight(0, 'new_added', '新增人数', 'rgb(104,221,213)')">新增人数</li>
              <li :class="{li: true, 'current':indexFlag==1}" @click="indexLight(1, 'cancel_added', '取消关注数', '#F36175')">取消关注数</li>
              <li :class="{li: true, 'current':indexFlag==2}" @click="indexLight(2, 'net_growth', '净增人数', '#F4C85B')">净增人数</li>
              <li :class="{li: true, 'current':indexFlag==3}" @click="indexLight(3, 'grand_total', '累积数', '#81A2FF')">累积数</li>
            </ul>
            <ul class="nav clearfix timeBtn">
              <div class="pull-left right_y">时间</div>
              <li :class="{time: true, 'current':timeFlag==7}" @click="timeLight(7)">最近7天</li>
              <li :class="{time: true, 'current':timeFlag==15}" @click="timeLight(15)">最近15天</li>
              <li :class="{time: true, 'current':timeFlag==30}" @click="timeLight(30)">最近一个月</li>
              <li :class="{time: true, 'current':timeFlag==0}" @click="timeLight(0)" class="time">选择日期</li>
              <div class="pull-left">
                <el-date-picker
                  v-model="fansDateRange"
                  type="daterange"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  @change="reMakeFansChart"
                  :disabled="isFansDisabled">
                </el-date-picker>
              </div>
            </ul>
          </div>
          <div id="index-fansChart"></div>
        </div>
        <!-- 粉丝结束 -->
        <div style="height:40px"></div>
        <!-- 今日数据开始 -->
        <div class="index-main-left-content-section-tit row clearfix">
          <div class="col-sm-2 margin-bottom-10">
            <ul>
              <li>
                <p class="jrsj_bj">今日数据</p>
              </li>
              <li>
                <div class="index-total-base index-total-rectangle index-total-toDay">
                  <p>扫码数量</p>
                  <div class="text-right"> <span class="timer timer-today count-title">{{todayTotal}}</span> <small>次</small> </div>
                </div>
              </li>
              <li>
                <div class="index-total-base index-total-rectangle index-total-toDay">
                  <p>浏览数量</p>
                  <div class="text-right"> <span class="timer timer-today count-title">0</span> <small>次</small> </div>
                </div>
              </li>
              <li>
                <div class="index-total-base index-total-rectangle index-total-toDay">
                  <p>经销商验货</p>
                  <div class="text-right"> <span class="timer timer-today count-title">{{todayReceive}}</span> <small>次</small> </div>
                </div>
              </li>
              <li>
                <div class="index-total-base index-total-rectangle index-total-toDay">
                  <p>异常二维码</p>
                  <div class="text-right"> <span class="timer timer-today count-title">{{todayHighRiskCount}}</span> <small>次</small> </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-sm-10">
            <div class="bsbj clearfix">
              <div class="col-sm-10">
                <ul>
                  <li class="row clearfix"> <span class="col-sm-6">企业</span>
                    <div class="col-sm-6" style="text-align: right">
                      <select v-model="timeType" @change="reMakeEnterpriseChart">
                        <option value="7">最近7天</option>
                        <option value="15">最近15天</option>
                        <option value="30">最近一个月</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div id="index-enterpriseChart"></div>
                  </li>
                </ul>
              </div>
              <div class="col-sm-2">
                <ul>
                  <li>
                    <div style="height:50px"></div>
                  </li>
                  <li>
                    <div class="index-total-base index-total-square index-total-enterprise">
                      <p>企业总数</p>
                      <span class="timer timer-enterprise count-title">{{enterpriseCount}}</span> </div>
                  </li>
                </ul>
              </div>
            </div>
            <div style="height:10px"></div>
            <div class="bsbj clearfix">
              <div class="col-sm-10">
                <ul>
                  <li class="row clearfix"> <span class="col-sm-6">二维码</span>
                    <div class="col-sm-6" style="text-align: right">
                      <select v-model="qrTimeType" @change="reMakeQrCodeChart">
                        <option value="7">最近7天</option>
                        <option value="15">最近15天</option>
                        <option value="30">最近一个月</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div id="index-qrCodeChart"></div>
                  </li>
                </ul>
              </div>
              <div class="col-sm-2">
                <ul>
                  <li>
                    <div style="height: 60px"></div>
                  </li>
                  <li>
                    <div class="index-total-base index-total-circle index-total-qr">
                      <p>二维码总数</p>
                      <span class="timer timer-qr count-title">{{qrCount}}</span> </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- 今日数据结束 -->
        <div style="height:40px"></div>
        <!-- 商品 工厂开始-->
        <div class="index-main-left-content-section-tit row clearfix">
          <div class="col-sm-6">
            <div class="bsbj clearfix">
              <div class="col-sm-8">
                <ul>
                  <li class="row clearfix"> <span class="col-sm-6">商品</span>
                    <div class="col-sm-6 text-right">
                      <select v-model="goodsTimeType" @change="reMakeGoodsChart">
                        <option value="7">最近7天</option>
                        <option value="15">最近15天</option>
                        <option value="30">最近一个月</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div id="index-goosChart"></div>
                  </li>
                </ul>
              </div>
              <div class="col-sm-4">
                <div style="height: 60px"></div>
                <div class="index-total-base index-total-circle index-total-goods">
                  <p>商品总数</p>
                  <span class="timer timer-goods count-title">{{goodsCount}}</span> </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="bsbj clearfix">
              <div class="col-sm-8">
                <ul>
                  <li class="row clearfix"> <span class="col-sm-6">工厂</span>
                    <div class="col-sm-6" style="text-align: right">
                      <select v-model="factoryTimeType" @change="reMakeFactoryChart">
                        <option value="7">最近7天</option>
                        <option value="15">最近15天</option>
                        <option value="30">最近一个月</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div id="index-factoryChart"></div>
                  </li>
                </ul>
              </div>
              <div class="col-sm-4">
                <div style="height: 30px"></div>
                <div><span class="index-fufactory-square jl"></span>赋码工厂</div>
                <div><span class="index-factory-square jl"></span>生产工厂</div>
                 <div style="height:10px"></div>
                <div class="index-total-base index-total-square index-total-enterprise">
                  <p>总数</p>
                  <span class="timer timer-factory count-title">{{factoryCount}}</span> </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 商品 工厂结束-->
        <div style="height:40px"></div>
        <!-- 实时状态开始 -->

        <div class="index-main-left-content-section-tit row">
          <div class="bsbj">
            <p>实时状态</p>
            <div class="bsbj_base clearfix text-center">
              <div class="col-sm-4">
                <div class="index-total-base index-total-circle index-total-pending1">
                  <p>待审核企业</p>
                  <span class="timer timer-pending count-title">{{makeStatus}}</span> </div>
              </div>
              <div class="col-sm-4">
                <div class="index-total-base index-total-circle index-total-pending2">
                  <p>待审核经销商</p>
                  <span class="timer timer-pending count-title">{{pendingDealer}}</span> </div>
              </div>
              <div class="col-sm-4">
                <div class="index-total-base index-total-circle index-total-pending3">
                  <p>待审核经工厂</p>
                  <span class="timer timer-pending count-title">{{pendingFactory}}</span> </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 实时状态结束 -->
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { formatDate } from '@/config/utils'
import { DatePicker } from 'element-ui'
import { enterpriseAddress, factoryAddress, statusAddress } from '@/config/api/enterprise-api'
import { fansAddress, fansNumberAddress } from '@/config/api/fans-api'
import { qrCodeAddress, goodsAddress, summaryAddress } from '@/config/api/goods-api'

export default {
  name: 'index',
  data () {
    return {
      // 粉丝人数
      fc: {
        fc1: 0,
        fc2: 0,
        fc3: 0,
        fc4: 0
      },
      tf: {
        tf1: 0,
        tf2: 0,
        tf3: 0,
        tf4: 0
      },
      // 扫码数量
      todayTotal: 0,
      // 经销商验货
      todayReceive: 0,
      // 异常二维码
      todayHighRiskCount: 0,
      // 工厂总数
      factoryCount: 0,
      // 企业总数
      enterpriseCount: 0,
      // 商品总数
      goodsCount: 0,
      qrCount: 0,
      indexFlag: 0,
      timeFlag: 7,
      startDate: null,
      endDate: null,
      fansDateRange: null,
      type: 'new_added',
      name: '新增人数',
      timeType: 7,
      qrTimeType: 7,
      factoryTimeType: 7,
      goodsTimeType: 7,
      isFansDisabled: true,
      // 待审核企业
      makeStatus: 0,
      // 待审核经销商
      pendingDealer: 0,
      // 待审核经工厂
      pendingFactory: 0,
      selfColor: 'rgb(104,221,213)',
      option: {
        // 粉丝折线图
        fansChart: null,
        // 二维码柱状图
        qrCodeChart: null,
        // 企业折线图
        enterpriseChart: null,
        // 工厂折线图
        factoryChart: null,
        // 商品柱状图
        goosChart: null,
        baseOpion: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          grid: {
            left: '0%',
            bottom: '3%',
            width: '98%',
            height: '90%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false
          },
          yAxis: {
            type: 'value'
          },
          series: []
        }
      }
    }
  },
  computed: {
  },
  methods: {
    init () {
      const that = this
      // 粉丝折线图对象初始化
      that.option.fansChart = echarts.init(document.getElementById('index-fansChart'))
      // 二维码柱状图初始化
      that.option.qrCodeChart = echarts.init(document.getElementById('index-qrCodeChart'))
      // 企业折线图初始化
      that.option.enterpriseChart = echarts.init(document.getElementById('index-enterpriseChart'))
      // 工厂折线图初始化
      that.option.factoryChart = echarts.init(document.getElementById('index-factoryChart'))
      // 商品柱状图初始化
      that.option.goosChart = echarts.init(document.getElementById('index-goosChart'))
      that.initData()
    },
    /**
     * 用于打开页面的时候，初始化数据
     * */
    initData () {
      const that = this
      // 开始绘制图
      that.reMakeFansChart()
      that.reMakeEnterpriseChart()
      that.reMakeQrCodeChart()
      that.reMakeFactoryChart()
      that.reMakeGoodsChart()
      that.setMakeStatus()
      that.makeSummary()
      return that
    },
    // 重制粉丝图
    async reMakeFansChart () {
      const that = this
      const option = that.option
      // 粉丝折线图对象初始化
      option.fansChart.clear()
      // 选择日期
      if (this.timeFlag === 0) {
        this.startDate = formatDate(this.fansDateRange[0], 'yyyy-MM-dd')
        this.endDate = formatDate(this.fansDateRange[1], 'yyyy-MM-dd')
      } else {
        this.getDateDiff(this.timeFlag)
      }
      const data = {
        type: this.type,
        startDate: this.startDate,
        endDate: this.endDate
      }
      const res = await fansAddress(data)
      const d = that.dataPackage(res)
      // 粉丝数据组装
      const fansOption = that.getFansLineChartOption(d)
      // 重新绘制图
      option.fansChart.setOption(fansOption)
      that.reMakeFansNumberSChart()
      return that
    },
    // 粉丝数据包装
    getFansLineChartOption (obj) {
      const that = this
      const xData = obj.xData
      const yData = obj.yData
      const lineName = this.name
      const selfColor = this.selfColor
      // 粉丝折线图对象初始化
      that.option.fansChart.clear()
      const option = Object.assign({}, that.option.baseOpion, {
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: xData
          }
        ],
        series: [
          {
            name: lineName,
            type: 'line',
            stack: '总量',
            areaStyle: {
              normal: {
                color: selfColor
              }
            },
            itemStyle: {
              normal: {
                color: selfColor,
                lineStyle: {
                  color: selfColor
                }
              }
            },
            data: yData
          }
        ]
      })
      return option
    },
    // 重制企业图
    async reMakeEnterpriseChart () {
      const that = this
      const option = that.option
      this.getDateDiff(this.timeType)
      // 获取企业数据
      const data = {
        startDate: this.startDate,
        endDate: this.endDate
      }
      const res = await enterpriseAddress(data)
      const data2 = that.dataPackage(res)
      // 企业数据组装
      const enterpriseOption = that.getEnterpriseLineChartOption(data2)
      // 重新绘制图
      option.enterpriseChart.setOption(enterpriseOption)
      this.enterpriseCount = data2.total
      return that
    },
    // 企业数据包装
    getEnterpriseLineChartOption (obj) {
      const that = this
      const xData = obj.xData
      const yData = obj.yData
      const selfColor = 'rgb(77,145,255)'
      // 企业折线图初始化
      that.option.enterpriseChart.clear()
      const option = Object.assign({}, that.option.baseOpion, {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xData
        },
        series: [
          {
            name: '企业',
            type: 'line',
            stack: '总量',
            data: yData,
            itemStyle: {
              normal: {
                color: selfColor,
                lineStyle: {
                  color: selfColor
                }
              }
            }
          }
        ]
      })
      return option
    },
    // 重制二维码图
    async reMakeQrCodeChart () {
      const that = this
      const option = that.option
      this.getDateDiff(this.qrTimeType)
      const data = {
        type: this.type,
        startDate: this.startDate,
        endDate: this.endDate
      }
      const res = await qrCodeAddress(data)
      const d = that.dataPackage(res)
      // 粉丝数据组装
      const qrCodeOption = that.getQrCodeLineChartOption(d)
      // 重新绘制图
      option.qrCodeChart.setOption(qrCodeOption)
      this.qrCount = d.total
      return that
    },
    // 二维码数据包装
    getQrCodeLineChartOption (obj) {
      const that = this
      const xData = obj.xData
      const yData = obj.yData
      const selfColor = 'rgb(104,221,213)'
      // 二维码柱状图初始化
      that.option.qrCodeChart.clear()
      const option = Object.assign({}, that.option.baseOpion, {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 默认为直线，可选为：'line' | 'shadow'
            type: 'shadow'
          }
        },
        xAxis: [
          {
            data: xData,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        series: [
          {
            name: '二维码',
            type: 'bar',
            barWidth: '15%',
            data: yData,
            itemStyle: {
              normal: {
                color: selfColor,
                barStyle: {
                  color: selfColor
                }
              }
            }
          }
        ]
      })
      return option
    },
    // 重制工厂图
    async reMakeFactoryChart () {
      const that = this
      const option = that.option
      this.getDateDiff(this.factoryTimeType)
      const param = {
        startDate: this.startDate,
        endDate: this.endDate
      }
      const res = await factoryAddress(param)
      const fmgc = res[0].fmgc
      const scgc = res[0].scgc
      const data = that.dataPackage(fmgc)
      const scgcData = that.dataPackage(scgc)
      data.yData2 = scgcData.yData
      data.total += scgcData.total
      // 工厂数据组装
      const factoryOption = that.getFactoryLineChartOption(data)
      // 重新绘制图
      option.factoryChart.setOption(factoryOption)
      // 工厂总数
      this.factoryCount = data.total
      return that
    },
    // 工厂数据包装
    getFactoryLineChartOption (obj) {
      const that = this
      // 赋码工厂
      const fuFactoryColor = 'rgb(252,88,99)'
      // 生产工厂
      const factoryColor = 'rgb(73,136,252)'
      // 工厂折线图初始化
      that.option.factoryChart.clear()
      const option = Object.assign({}, that.option.baseOpion, {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: obj.xData
        },
        series: [
          {
            name: '赋码工厂',
            type: 'line',
            stack: '总量',
            data: obj.yData,
            itemStyle: {
              normal: {
                color: fuFactoryColor,
                lineStyle: {
                  color: fuFactoryColor
                }
              }
            }
          },
          {
            name: '生产工厂',
            type: 'line',
            stack: '总量',
            data: obj.yData2,
            itemStyle: {
              normal: {
                color: factoryColor,
                lineStyle: {
                  color: factoryColor
                }
              }
            }
          }
        ]
      })
      return option
    },
    // 重制商品图
    async reMakeGoodsChart () {
      const that = this
      const option = that.option
      this.getDateDiff(this.goodsTimeType)
      const param = {
        startDate: this.startDate,
        endDate: this.endDate
      }
      const res = await goodsAddress(param)
      const data = that.dataPackage(res)
      // 商品数据组装
      const goodsOption = that.getGoodsLineChartOption(data)
      // 重新绘制图
      option.goosChart.setOption(goodsOption)
      // 商品总数
      that.goodsCount = data.total
      return that
    },
    // 商品数据包装
    getGoodsLineChartOption (obj) {
      const that = this
      const xData = obj.xData
      const yData = obj.yData
      // 商品柱状图初始化
      that.option.goosChart.clear()
      const option = Object.assign({}, that.option.baseOpion, {
        tooltip: {
          trigger: 'axis',
          // 坐标轴指示器，坐标轴触发有效
          axisPointer: {
            // 默认为直线，可选为：'line' | 'shadow'
            type: 'shadow'
          }
        },
        xAxis: [
          {
            data: xData,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        series: [
          {
            name: '商品',
            type: 'bar',
            barWidth: '50%',
            data: yData
          }
        ]
      })
      return option
    },
    // 实时状态
    async setMakeStatus () {
      const that = this
      const res = await statusAddress()
      const data = res
      // 待审核企业
      this.pendingEnterprise = data[0]
      // 待审核经销商
      this.pendingDealer = data[1]
      // 待审核经工厂
      this.pendingFactory = data[2]
      return that
    },
    async makeSummary () {
      const that = this
      const res = await summaryAddress()
      const data = res[0]
      // 扫码数量
      that.todayTotal = data.total
      // 经销商验货
      that.todayReceive = data.receive
      // 异常二维码
      that.todayHighRiskCount = data.highRiskCount
      return that
    },
    indexLight (index, type, name, color) {
      this.indexFlag = index
      this.type = type
      this.name = name
      this.selfColor = color
      this.reMakeFansChart()
    },
    timeLight (time) {
      this.timeFlag = time
      if (time === 0) {
        this.isFansDisabled = false
      } else {
        this.isFansDisabled = true
        this.fansDateRange = null
      }
      this.reMakeFansChart()
    },
    async reMakeFansNumberSChart () {
      const data = {
        startDate: this.startDate,
        endDate: this.endDate
      }
      const res = await fansNumberAddress(data)
      const fansNumberList = res
      // 新增关注人数
      this.fc.fc1 = fansNumberList[0]
      // 取消关注人数
      this.fc.fc2 = fansNumberList[1]
      // 净增关注人数
      this.fc.fc3 = fansNumberList[2]
      // 累积关注人数
      this.fc.fc4 = fansNumberList[3]
    },
    getDateDiff (days) {
      const date = new Date()
      const endAdd = formatDate(date, 'yyyy-MM-dd')
      date.setDate(date.getDate() - days)
      const startAdd = formatDate(date, 'yyyy-MM-dd')
      this.startDate = startAdd
      this.endDate = endAdd
    },
    dataPackage (arry) {
      const data = {}
      data.xData = []
      data.yData = []
      arry.forEach((d) => {
        let key = Object.keys(d)[0]
        const v = d[key]
        key = key.split('-')
        key = `${key[1]}/${key[2]}`
        data.xData.push(key)
        data.yData.push(v)
      })
      data.total = data.yData.reduce((p, c) => p + c)
      return data
    }
  },
  components: {
    'el-date-picker': DatePicker
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
