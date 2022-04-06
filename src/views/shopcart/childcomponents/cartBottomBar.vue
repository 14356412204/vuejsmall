<template>
  <div id="cartBottomBar">
    <div class="cartBottomBarItem CheckButton"><CheckButton></CheckButton>全选</div>
    <div class="cartBottomBarItem totalPrice">合计：￥{{totalPrice}}</div>
    <div class="cartBottomBarItem goToSum">去计算({{checkedItem}})</div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'
export default {
  name:'cartBottomBar',
  components:{
    CheckButton
  },
  computed:{
    totalPrice(){
      return this.$store.state.cartList.filter(s=>{
        return s.isChecked===true
      }).reduce(function(prevalue,n){
          return (prevalue + n.price*n.count)
      },0).toFixed(2)
    },
    checkedItem(){
      return this.$store.state.cartList.filter(s=>{
        return s.isChecked===true
      }).length
    }
  }
}
</script>

<style>
  #cartBottomBar{
    display: flex;
    height: 40px;
    background-color: rgb(237,237,237);
  }
  .cartBottomBarItem{
    line-height: 40px;
  }
  .CheckButton{
    display: flex;
    flex: 1.2;
    align-items: center;
    color: rgb(187, 187, 187);
  }
  .totalPrice{
    flex: 3;
  }
  .goToSum{
    text-align: center;
    background-color: rgb(255,82,0);
    color: white;
    flex: 1.5;
  }
</style>