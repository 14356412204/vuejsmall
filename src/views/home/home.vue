<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <tab-control :titles="['流行', '新款', '精选']" @tabClick="getItemClick" ref="fixedtabcontrol" v-show="tabIsShow"></tab-control>
    <scroll class="scrollContent" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="contentScroll" @pullingUp = "loadMore">
        <homeSwiper :banners="banners" @swiperImageLoad='swiperImageLoad'></homeSwiper>
        <RecommendView :recommends="recommends"></RecommendView>
        <FeatureView></FeatureView>
        <tab-control :titles="['流行', '新款', '精选']" @tabClick="getItemClick" ref="tabcontrol" v-show="!tabIsShow"></tab-control>
        <GoodList :goods="showGoods"></GoodList>
    </scroll>
    <BackTop  @click.native="backtopbtn" v-show="isShow" ></BackTop>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodList";
import scroll from '@/components/common/scroll/scroll'
import BackTop from '@/components/common/backtop/BackTop'

import homeSwiper from "./childComponents/homeSwiper.vue";
import RecommendView from "./childComponents/RecommendView.vue";
import FeatureView from "./childComponents/FeatureView.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";
import {debounce} from 'components/utils'

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      positiony:'',
      timer:null,
      tabOffsetTop:0,
      tabIsShow:false,
      saveY:0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
    // 设置一个计算属性，当滑动距离超过1000时显示backtop的按钮
    isShow(){
      return this.positiony < -1000
    },
  },
  components: {
    NavBar,
    TabControl,
    homeSwiper,
    RecommendView,
    FeatureView,
    GoodList,
    scroll,
    BackTop
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted(){
    // 3.监听图片加载完成事件 每加载完一张图片刷新一下scroll，实时更新scroll内的scrollerHeight的值
    const refresh = debounce(this.$refs.scroll.refresh,100)
    this.$bus.$on('itemImgLoad',()=>{
      refresh()
    })
  },
  activated(){
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated(){
    this.saveY = this.positiony
  },
  methods: {
    // 事件监听相关的
    getItemClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.fixedtabcontrol.currentIndex = index
      this.$refs.tabcontrol.currentIndex = this.$refs.fixedtabcontrol.currentIndex
    },
    backtopbtn(){
      this.$refs.scroll.scrollTo(0,0,1000)
    },
    contentScroll(position){
      this.positiony = position.y
      if(-this.positiony>=this.tabOffsetTop){
        this.tabIsShow = true
      }else{
        this.tabIsShow = false
      }
    },
    // 上拉加载更多
    loadMore(){
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad(){
      this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop
    },
    // 网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page++;
        this.$refs.scroll.finishPullUp()
      });
    }
  },
};
</script>

<style scope>
#home{
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  z-index: 999;
}
#home .scrollContent{
  height:calc(100vh - 93px);
  overflow: hidden;
}
</style>