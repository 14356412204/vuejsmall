<template>
<div id="detail">
  <detailNavBar @titleClick="titleClick" :titleCurrentIndex="titleCurrentIndex"></detailNavBar>
  <scroll class="detailScroll" ref="scroll" :probe-type="3" @scroll="detailScroll">
    <detailSwiper :detailSwiperData="detailSwiperData"></detailSwiper>
    <detailItemInfo :goods="goods"></detailItemInfo>
    <detailShopInfo :shop="shop"></detailShopInfo>
    <detailItemImage :detailInfo="detailInfo" @detailImageLoaded="detailImageLoaded"></detailItemImage>
    <detailGoodsParams ref="goodsParams" :paramsInfo="paramsInfo"></detailGoodsParams>
    <detailUserComments ref="userComments" :commentsInfo="commentsInfo"></detailUserComments>
    <detailrecommend ref="recommend" :recommendData="recommendData" @itemRecommendDataImg="itemRecommendDataImg"></detailrecommend>
  </scroll>
  <BackTop  @click.native="backtopbtn" v-show="isShow" ></BackTop>
  <detailBottomBar class="detailBottomBar" @addCart="addCart"></detailBottomBar>
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
import detailBottomBar from 'views/detail/childcomponents/detailBottomBar'
// import BackTop from '@/components/common/backtop/BackTop'
import {itemListenerMixin,detailBackTopMixin} from 'common/mixin.js'

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
      recommendData:[],
      scrollItems:[],
      getThemeTopY:null,
      titleCurrentIndex:0,
    }
  },
  mixins:[itemListenerMixin,detailBackTopMixin],
  components:{
    detailNavBar,
    detailSwiper,
    detailItemInfo,
    detailShopInfo,
    detailItemImage,
    detailGoodsParams,
    detailUserComments,
    detailrecommend,
    scroll,
    detailBottomBar
  },
  methods:{
    detailScroll(position){
      this.positiony = position.y
      let length = this.scrollItems.length
      for(let i=0;i<length;i++){
        if(this.titleCurrentIndex!==i&&((this.positiony<=this.scrollItems[i]&&this.positiony>this.scrollItems[i+1])||(i==length-1&&this.positiony<=this.scrollItems[i]))){
          this.titleCurrentIndex = i
        }
      }
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0,this.scrollItems[index],500)
    },
    detailImageLoaded(){
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    itemRecommendDataImg(){
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    addCart(){
      // 1.获取购物车需要展示的信息 图片 标题 描述 价格 数量 
      const product={}
      product.iid = this.iid
      product.image = this.detailSwiperData[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.isChecked = false
      product.count = 0
      // 2.将商品添加到购物车
      this.$store.dispatch('addCart',product)
    }
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
      this.scrollItems=[]
      
      this.getThemeTopY = debounce(()=>{
        this.scrollItems=[]
        this.scrollItems.push(0)
        this.scrollItems.push(-this.$refs.goodsParams.$el.offsetTop+44)
        this.scrollItems.push(-this.$refs.userComments.$el.offsetTop+44)
        this.scrollItems.push(-this.$refs.recommend.$el.offsetTop+44)
      },100)
    }),
    getRecommendData(this.iid).then(res =>{
      this.recommendData = res.data.data.list
    })
  },
}
</script>

<style scope>
  #detail{
    position: relative;
    z-index: 9999;
    background-color: #fff;
  }
  #detail .detailScroll{
    height:calc(100vh - 93px);
    overflow: hidden;
  }
</style>