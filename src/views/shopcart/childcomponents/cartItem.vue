<template>
  <div id="cartItems">
    <div v-for="(item,index) in $store.state.cartList" class="cartItem" :key="item.iid">
      <CheckButton  :isChecked="$store.state.cartList[index].isChecked" @click.native="checked(index)"></CheckButton>
      <div class="imgWrapper"><img :src="item.image" alt=""></div>
      <div class="descWrapper">
        <div class="cartItemTitle">{{item.title}}</div>
        <div class="cartItemDesc">{{item.desc}}</div>
        <div class="cartItemNum">
          <div class="price">￥{{item.price}}</div>
          <div class="count">x{{item.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'
export default {
  name:'cartItem',
  components:{
    CheckButton
  },
  methods: {
    checked(index){
      this.$store.state.cartList[index].isChecked = !this.$store.state.cartList[index].isChecked
    }
  },
}
</script>

<style>
  .cartItem{
    display: flex;
    width: 100%;
    height: 150px;
    align-items: center;
    border-bottom: 1px solid rgb(139, 139, 139);
  }
  .select-input{
    width: 20px;
    height: 20px;
    margin-bottom: 5px;
    border: 3px solid gray;
  }
  .cartItem .imgWrapper{
    width: 90px;
    height: 120px;
  }
  .cartItem .imgWrapper img{
    border-radius: 5px;
    width: 100%;
    height: 120px;
  }
  .descWrapper{
    width: 65%;
    height: 120px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5px;
  }
  .descWrapper .cartItemTitle,.descWrapper .cartItemDesc{
    flex:3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .descWrapper .cartItemTitle{
    font-size: 20px;
    padding-bottom: 15px;
  }
  .descWrapper .cartItemDesc{
    font-size: 14px;
    padding-bottom: 20px;
  }
  .cartItemNum{
    flex:1;
    display: flex;
    padding: 10px 5px 10px 0px ;
    justify-content: space-between;
  }
  .cartItemNum .price{
    color: orange;
  }
</style>