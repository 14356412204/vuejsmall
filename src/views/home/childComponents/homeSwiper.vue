<template>
  <swiper>
      <SwiperItem v-for="item in banners" :key='item.value'>
        <a :href="item.link"><img :src="item.image" alt=""></a>
      </SwiperItem>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
export default {
  name:'homeSwiper',
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
  }
}
</script>

<style>

</style>