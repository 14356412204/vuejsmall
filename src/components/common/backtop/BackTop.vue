<template>
  <div id="backtop">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:'BackTop'
}
</script>

<style scope>
  #backtop{
    position: fixed;
    bottom: 43px;
    right: 3px;
    z-index: 9999;
  }
  #backtop img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
</style>