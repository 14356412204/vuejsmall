<template>
  <div id="shopCart">
    <navbar class="shopCartNavBar"><div slot="center">购物车({{cartLength}})</div></navbar>
    <scroll class="shopCartScroll" ref="scroll" :probe-type="3">
      <cartItem></cartItem>
    </scroll>
    <cartBottomBar></cartBottomBar>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar'
import cartItem from './childcomponents/cartItem.vue'
import cartBottomBar from './childcomponents/cartBottomBar.vue'
import scroll from 'components/common/scroll/scroll'
import {mapGetters} from 'vuex'
export default {
  name:'shopcart',
  components:{
    navbar,
    cartItem,
    cartBottomBar,
    scroll
  },
  computed:{
    ...mapGetters(['cartLength'])
  }
}
</script>

<style>
  #shopCart .shopCartScroll{
    height:calc(100vh - 93px - 40px);
    overflow: hidden;
  }
  .shopCartNavBar{
    background-color: var(--color-tint);
    font-size: 18px;
    color: white;
    font-weight: 500;
  }
  #shopCart{
    width: 100%;
  }
</style>