<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'scroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      scroll:null,
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
      click:true,
    })
    this.scroll.on('scroll',(position) => {
      this.$emit('scroll',position)
    })
    // 监听上拉加载更多
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    }
  },
  // 封装一个方法，回到顶部
  methods:{
    scrollTo(x,y,time=500){
      this.scroll&&this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll&&this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll&&this.scroll.refresh()
    }
  }
}
</script>

<style scope>

</style>