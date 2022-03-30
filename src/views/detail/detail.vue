<template>
<div id="detail">
  <detailNavBar></detailNavBar>
  <scroll class="detailScroll" ref="detailScroll">
      <detailSwiper :detailSwiperData="detailSwiperData"></detailSwiper>
      <detailItemInfo :goods="goods"></detailItemInfo>
      <detailShopInfo :shop="shop"></detailShopInfo>
      <detailItemImage :detailInfo="detailInfo"></detailItemImage>
      <detailGoodsParams :paramsInfo="paramsInfo"></detailGoodsParams>
      <detailUserComments :commentsInfo="commentsInfo"></detailUserComments>
      <detailrecommend :recommendData="recommendData"></detailrecommend>
  </scroll>
  
</div>
  
</template>

<script>
import detailNavBar from 'views/detail/childcomponents/detailNavBar'
import detailSwiper from 'views/detail/childcomponents/detailSwiper'
import detailItemInfo from 'views/detail/childcomponents/detailItemInfo' 
import detailShopInfo from 'views/detail/childcomponents/detailShopInfo' 
import detailItemImage from 'views/detail/childcomponents/detailItemImage' 
import detailGoodsParams from 'views/detail/childcomponents/detailGoodsParams'
import detailUserComments from 'views/detail/childcomponents/detailUserComments'
import detailrecommend from 'views/detail/childcomponents/detailrecommend'

import scroll from 'components/common/scroll/scroll'
import {getDetailData,GoodsInfo,getRecommendData} from 'network/detail'
import {debounce} from 'components/utils'
export default {
  name:'detail',
  data(){
    return{
      iid:null,
      detailSwiperData:[],
      goods:{},
      shop:{},
      result:{},
      detailInfo:{},
      paramsInfo:{},
      commentsInfo:[],
      detailRecommendInfo:{},
      recommendData:[]
    }
  },
  components:{
    detailNavBar,
    detailSwiper,
    detailItemInfo,
    scroll,
    detailShopInfo,
    detailItemImage,
    detailGoodsParams,
    detailUserComments,
    detailrecommend,
  },
  created(){
    this.iid  = this.$route.params.id
    getDetailData(this.iid).then(res=>{
      this.result = res
      this.detailSwiperData = res.data.result.itemInfo.topImages
      this.goods  = new GoodsInfo(res.data.result.itemInfo,res.data.result.columns,res.data.result.shopInfo.services)
      this.shop = res.data.result.shopInfo
      this.detailInfo = res.data.result.detailInfo
      this.paramsInfo = res.data.result.itemParams
      this.commentsInfo = res.data.result.rate.list
      this.detailRecommendInfo = res.data.result
    }),
    getRecommendData(this.iid).then(res =>{
      this.recommendData = res.data.data.list
    })
  },
  mounted(){
    const refresh = debounce(this.$refs.detailScroll.refresh,100)
    this.$bus.$on('detailImageLoaded',()=>{
      refresh()
    })
  }
}
</script>

<style scope>
  #detail{
    position: relative;
    z-index: 9999;
    background-color: #fff;
  }
  #detail .detailScroll{
    height:calc(100vh - 44px);
    overflow: hidden;
  }

</style>