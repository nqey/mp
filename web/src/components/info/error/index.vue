<template>
  <div v-show="this.errMsg.length > 0" class="alert alert-danger errMsg" role="alert">
    <p v-for="(item, index) of errMsg" :key="index"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><span class="sr-only">Error:</span>&#12288;{{item}}</p>
  </div>
</template>

<script>
export default {
  name: 'errInfo',
  props: ['errMsg'],
  data () {
    return {}
  },
  computed: {},
  methods: {
    close () {
      this.errMsg = []
    }
  },
  watch: {},
  components: {
    'qc-input': () => import('@/components/input')
  },
  beforeCreate () {
  },
  cteated () {
  },
  beforeMount () {
  },
  mounted () {
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
