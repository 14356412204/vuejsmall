<template>
  <div id="detailInfo" v-if="Object.keys(detailInfo).length !== 0 ">
    <div class="detailDesc"><span>{{detailInfo.desc}}</span></div>
    <div class="imageDesc"><span>{{detailInfo.detailImage[0].key}}</span></div>
    <ul class="imageWrapper">
      <li class="detailImage" v-for="(item,index) in detailInfo.detailImage[0].list" :key = "index">
        <img :src="item" alt="" @load="detailImageLoad">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'detailItemImage',
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    detailImageLoad(){
        this.$bus.$emit('detailImageLoaded')
    }
  }
}
</script>

<style>
  .detailImage img{
    width: 100%;
  }
  .imageDesc{
    color: black;
    padding: 10px 5px;
  }
  .detailDesc{
    border-top: 1px black dotted;
    padding: 10px 5px;
    color: black;
  }
</style>