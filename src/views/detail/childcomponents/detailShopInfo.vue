<template>
  <div id="shopInfo">
    <a :href="shop.shopUrl"><div class="shopTitle"><img :src="shop.shopLogo" alt=""><div>{{shop.name}}</div></div></a>
    <div class="shopDesc">
      <div class="shopDescLeft">
        <div class="cSells"><div>{{shop.cSells>=10000?(shop.cSells/10000).toFixed(1)+'万':shop.cSells}}</div><div>总销量</div></div>
        <div class="cGoods"><div>{{shop.cGoods}}</div><div>全部宝贝</div></div>
      </div>
      <div class="shopDescRight">
        <div class="score" v-for="item in shop.score">
          <div><div>{{item.name}}</div><div :class="{isBetter:item.isBetter,isWorse:!item.isBetter}">{{item.score.toFixed(2)}}</div><div class="better" v-if="item.isBetter">高</div><div class="worse" v-else>低</div></div>
        </div>
      </div >
    </div>
    <div class="intoShop">
      <a href="shop.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  name:'detailShopInfo',
  props:{
    shop:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style>
  #shopInfo{
    color: black;
    padding: 20px 5px;
   
  }
  #shopInfo .shopTitle{
    display: flex;
    height: 50px;
  }
  #shopInfo .shopTitle div{
    margin-top: 18px;
  }
  #shopInfo .shopTitle img{
    width: 50px;
    border: 1px solid rgb(179, 177, 177);
    border-radius: 50%;
    margin-right: 5px;
  }
  .shopDesc{
    display: flex;
    padding-top: 30px;
    
  }
  .shopDescLeft,.shopDescRight{
    font-size: 14px;
    flex: 1;
  }
  .shopDescLeft{
    height: 40px;
    display: flex;
    padding-right: 20px;
    margin-top: 20px;
    padding-left: 10px;
  }
  .shopDescLeft .cGoods{
    border-right: 2px solid rgb(221, 219, 219);
    padding-right: 20px;
  }
  .shopDescLeft div{
    margin-bottom: 5px;
  }
  .shopDescRight{
    margin-left: 20px;
    font-size: 14px;
  }
  .shopDescLeft .cSells,.shopDescLeft .cGoods{
    flex: 1;
    text-align: center;
  }
  .shopDescRight .score div{
    display: flex;
  }
  .shopDescRight .score div div{
    margin-left: 5px;
    margin-bottom: 15px;
  }
  .isBetter{
    color: rgb(192, 2, 2);
  }
  .isWorse{
    color: rgb(3, 194, 3);
  }
  .better{
    color: white;
    background-color: rgb(192, 2, 2);
    border-radius: 2px;
  }
  .worse{
    color: white;
    background-color: rgb(3, 194, 3);
    border-radius: 2px;
  }
  .intoShop{
    text-align: center;
  }
  .intoShop a{
    padding: 5px 20px;
    background-color: rgb(209, 209, 209);
    border-radius: 5px;
  }
</style>