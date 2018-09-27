<template>
  <div id="app">
    <v-header v-if="$route.meta.menu"/>
    <v-menu v-if="$route.meta.menu"/>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    'v-header': () => import('@/components/header'),
    'v-menu': () => import('@/components/menu')
  }
}
</script>

<style lang="scss">
  @import 'assets/css/common.scss';
</style>
