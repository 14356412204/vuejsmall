<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name:'navbar'
}
</script>

<style>
  .nav-bar{
    display: flex;
    width: 100%;
    line-height: 44px;
  }
  .left,.right{
    height: 100%;
    width: 60px;
    text-align: center;
  }
  .center{
    text-align: center;
    flex: 1;
  }
</style>