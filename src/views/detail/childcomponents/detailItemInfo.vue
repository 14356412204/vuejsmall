<template>
  <div id="detailItemInfo" v-if="Object.keys(goods).length !== 0">
    <div class="title">{{goods.title}}</div>
    <div class="detailPrice">
      <div class="price">{{goods.newPrice}}</div>
      <div class="oldPrice">{{goods.oldPrice}}</div>
      <div class="discountDesc" :style="{backgroundColor:goods.discountBgc}" v-if="goods.discount">{{goods.discount}}</div>
    </div>
    <div class="info-other">
      <span v-for="item in goods.columns" class="itemColumns">{{item}}</span>
    </div>
    <div class="info-service">
      <span v-for="item in goods.services" class="itemService" v-if="item.icon"><img :src="item.icon" alt="">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'detailItemInfo',
  props:{
    goods:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style scope>
  #detailItemInfo .title{
    font-size: 17px;
    color: rgb(39, 39, 39);
    margin: 5px 5px;
  }
  #detailItemInfo .detailPrice{
    display: flex;
    margin: 5px 5px;
    height: 26px;
  }
  #detailItemInfo .detailPrice .price{
    font-size: 24px;
    height: 26px;
    color: var(--color-tint);
  }
  #detailItemInfo .detailPrice .oldPrice{
    margin-top: 8px;
    margin: 9px 4px 0px;
  }
  #detailItemInfo .detailPrice .oldPrice{
    font-size: 14px;
    color: rgb(160, 160, 160);
    text-decoration: line-through;
  }
  #detailItemInfo .detailPrice .discountDesc{
    height: 16px;
    padding: 0 5px;
    font-size: 14px;
    color: #fff;
    border-radius: 6px/6px;
  }
  .info-other{
    margin: 15px 5px;
    padding: 5px 0px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(218, 218, 218);
  }
  .itemColumns{
    font-size: 14px;
    color: rgb(160, 160, 160);
  }
  .info-service{
    padding: 5px 5px 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 5px solid rgb(241, 241, 241);
  }
  .itemService{
    font-size: 14px;
    color: black;
  }
  .itemService img{
    vertical-align: middle;
    width: 14px;
    margin-top: -4px;
  }
</style>