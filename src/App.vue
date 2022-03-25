<template>
  <div id="app">
    <router-view/>
    <MainTabBar class="MainTabBar"></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/mainTabbar/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}
</script>

<style>
/* 引入base.css文件 */
@import "assets/css/base.css";
.MainTabBar{
  position: relative;
  z-index: 999;
}
</style>
