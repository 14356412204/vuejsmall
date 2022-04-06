<template>
  <div id="detail">
    <NavBar>
      <div slot="left" class="back" @click="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" 
        class="titleItem" 
        @click="itemClick(index)" 
        :class="{isClick:index===titleCurrentIndex}"
        >{{item}}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name:'detailNavBar',
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  // props:{
  //   positions:[
  //     itemPosition,
  //     paramsPosition,
  //     commentsPosition,
  //     recommendPosition
  //   ]
  // },
  components:{
    NavBar
  },
  props:{
    titleCurrentIndex:{
      type:Number
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit("titleClick",index)
    },
    back(){
      this.$router.back(0)
    }
  }
}
</script>

<style scope>
  .title{
    display: flex;
    font-size: 13px;
  }
  .titleItem{
    flex: 1; 
  }
  .isClick{
    color: var(--color-tint);
  }
  .back img{
   vertical-align: middle;
  }
</style>