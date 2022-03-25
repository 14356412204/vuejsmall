<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <scroll class="scrollContent" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="contentScroll" @pullingUp = "loadMore">
        <homeSwiper :banners="banners" class="banners"></homeSwiper>
        <RecommendView :recommends="recommends"></RecommendView>
        <FeatureView></FeatureView>
        <tab-control class="tabcontrol" :titles="['流行', '新款', '精选']" @tabClick="getItemClick"></tab-control>
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
      positiony:''
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
    // 设置一个计算属性，当滑动距离超过1000时显示backtop的按钮
    isShow(){
      return this.positiony < -1000
    }
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
    },
    backtopbtn(){
      this.$refs.scroll.scrollTo(0,0,1000)
    },
    contentScroll(position){
      this.positiony = position.y
    },
    // 上拉加载更多
    loadMore(){
      this.getHomeGoods(this.currentType);
      
      this.$refs.scroll.scroll.refresh()
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
.banners {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  z-index: 999;
}
.scrollContent .tabcontrol {
  position: sticky;
  top: 44px;
  z-index: 998;
}
.scrollContent{
  height:calc(100vh - 49px);
  overflow: hidden;
}
</style>