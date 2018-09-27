<template>
  <div class="left_menu" id="left-menu">
    <div class="logo"><img :src="logo"/>
      <br/>
      <br/>
      <h3>CPS申报服务处</h3>
      <h3>自主管理平台</h3>
    </div>
    <div class="main-left_nav_list">
        <section class="sidebar">
            <ul class="sidebar-menu">
                <li v-for="(item, index) in items" :class="{ active: item.selected }" @click="setC(item)" :key="index">
                    <a v-if="item.subItems && item.subItems.length>0" @click="item.open = !item.open;">
                      {{item.name}}
                      <span class="glyphicon ms"
                        :class="{'glyphicon-menu-up': item.open, 'glyphicon-menu-down': !item.open}"></span>
                    </a>
                    <router-link v-else :to="item.link">{{item.name}}</router-link>
                    <ul v-if="item.subItems && item.subItems.length>0" v-show="item.open" class="treeview-menu">
                      <li v-for="(subItem, subIndex) in item.subItems" :class="{ active: subItem.selected }" @click="setC(subItem)" :key="subIndex">
                        <router-link :to="subItem.link">{{subItem.name}}</router-link>
                      </li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/img/logo.png'

export default {
  name: 'leftMenu',
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
      rule: [],
      username: window.sessionStorage.getItem('username'),
      logo: Logo,
      items: [
        {
          name: '首页',
          link: '/',
          selected: false
        },
        {
          name: '推荐列表',
          link: '/recommend/list'
        },
        {
          name: '补贴管理',
          open: false,
          selected: false,
          subItems: [
            {
              name: '申请补贴',
              link: '/recommend/apply',
              selected: false
            },
            {
              name: '申请记录',
              link: '/recommend/record',
              selected: false
            }
          ]
        },
        {
          name: '申报管理',
          open: false,
          selected: false,
          subItems: [
            {
              name: '企业申报',
              link: '/decEnt/entry',
              selected: false
            },
            {
              name: '企业列表',
              link: '/ent/list',
              selected: false
            },
            // 省级服务中心
            {
              name: '申报服务处',
              link: '/ent/agency',
              selected: false
            },
            //     {
            //       name: '添加申报官',
            //       link: '/officer/entry',
            //     }
            // 省级服务中心，申报服务处
            {
              name: '申报官列表',
              link: '/ent/officer',
              selected: false
            }
          ]
        },
        {
          name: '企业信息',
          open: false,
          selected: false,
          subItems: [
            {
              name: '工厂列表',
              link: '/factory/list',
              selected: false
            },
            {
              name: '商品列表',
              link: '/goods/list',
              selected: false
            },
            {
              name: '经销商列表',
              link: '/franchiser/list',
              selected: false
            },
            {
              name: '二维码',
              link: '/code/list',
              selected: false
            }
          ]
        }
      ]
    }
  },
  computed: {},
  methods: {
    // 外部传入参数变更
    setC (li) {
      this.items.forEach((o) => {
        o.selected = false
        if (o.subItems) {
          o.subItems.forEach((s) => {
            s.selected = false
          })
        }
      })
      li.selected = true
      this.stopproPagation()
    },
    // 阻止冒泡
    stopproPagation () {
      window.event.cancelBubble = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
  @import '../../assets/css/mixin.scss';
  @import 'index.scss';
</style>
