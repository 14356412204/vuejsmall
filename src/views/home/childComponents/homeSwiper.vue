<template>
  <swiper>
      <SwiperItem v-for="item in banners" :key='item.value'>
        <a :href="item.link"><img :src="item.image" alt="" @load="imgload"></a>
      </SwiperItem>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
export default {
  name:'homeSwiper',
  data(){
    return{
      isLoad:false
    }
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    imgload(){
      if(!this.isLoad){
        this.isLoad=!this.isLoad
        this.$emit('swiperImageLoad')
      }
    }
  }
}
</script>

<style>

</style>