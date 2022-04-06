<template>
  <div
    id="detailrecommend"
    v-if="recommendData.length !== 0"
  >
    <div v-for="item in recommendData" class="recommendItem">
      <img :src="item.image" alt="" @load="recommendDataImg"/>
      <div class="imgdec">
        <p>{{ item.title }}</p>
        <span class="price">{{ item.price }}</span>
        <span class="collect">{{ item.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailrecommend",
  props: {
    recommendData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods:{
    recommendDataImg(){
      this.$emit('itemRecommendDataImg')
    }
  }
};
</script>

<style scope>
  #detailrecommend{
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .recommendItem{
    width:48%;
  }
  .recommendItem img{
    width: 100%;
    border-radius: 5px;
  }
  .imgdec{
    height: 30px;
    width: 100%;
    font-size: 14px;
    margin-bottom: 5px;
    text-align:center;
  }
   p{
    height: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }    
  .imgdec .price{
    color: var(--color-tint);
    margin-right: 5px;
  }
  .imgdec .collect{
    padding: 0 14px;
    position: relative;
  }
  .imgdec .collect::before{
    content: '';
    position: absolute;
    left: 0px;
    width: 14px;
    height: 14px;
    overflow: hidden;
    background: url('~assets/img/common/collect.svg') 0/14px;
    z-index: 1;
  }
</style>