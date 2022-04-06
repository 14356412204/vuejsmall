<template>
  <div id="detailBottomBar">
    <div >
      <i class="kefu"></i>
      <span>客服</span>
    </div>
    <div >
      <i class="shop"></i>
      <span>店铺</span>
    </div>
    <div class="shoucangactive" @click="shoucangClick">
      <i class="shoucang" :style="{backgroundPositionY:shoucang}"></i>
      <span>收藏</span>
    </div>
    <div class="cart" @click="addToCart" >
      <span>加入购物车</span>
    </div>
    <div class="buy">
      <span>购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'detailBottomBar',
  data(){
    return{
      shoucang:'0px'
    }
  },
  methods:{
    addToCart(){
      this.$emit('addCart')
    },
    shoucangClick(){
      if(this.shoucang==='0px'){
        this.shoucang='-30px'
      }else{
        this.shoucang='0px'
      }
    }
  }
}
</script>

<style>
  #detailBottomBar{
    position: fixed;
    z-index: 99999;
    height: 49px;
    width: 100%;
    background-color: #fff;
    bottom: 0;
    display: flex;
  }
  #detailBottomBar div{
    flex: 1;
    padding: 0px 15px ;
    text-align: center;
  }
  #detailBottomBar i{
    display: block;
    width: 25px;
    height: 25px;
    background-image: url('~assets/img/detail/detail_bottom.png');
    background-size: 100%;
    margin: 3px auto;
  }
  .kefu{
    background-position-y: -59px;
  }
  .shop{
    background-position-y: -111px;
  }

  #detailBottomBar .cart{
    flex: 2.5;
    height: 49px;
    line-height: 49px;
    color: black;
    background-color: rgb(255, 219, 14);
    text-align: center;
  }
  #detailBottomBar .buy{
    flex: 1;
    height: 49px;
    line-height: 49px;
    background-color: var(--color-tint);
    padding: 0px 23px;
    color: #fff;
  }
</style>