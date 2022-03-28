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
    height: 44px;
    line-height: 44px;
    box-shadow: 0 -1px 2px rgb(0, 0, 0);
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