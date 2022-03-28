<template>
  <div class="goodlistitem" @click="itemClick">
    <!-- {{goodsitem}} -->
    <img :src="goodsitem.show.img" alt="" @load="imgLoad">
    <div class="imgdec">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodListItem',
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit('itemImgLoad')
    },
    itemClick(){
      this.$router.push('/detail/' + this.goodsitem.iid )
    }
  }
}
</script>

<style scope>
  .goodlistitem{
    width:48%;
  }
  .goodlistitem img{
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