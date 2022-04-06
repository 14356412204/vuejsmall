<template>
  <div id="detailSwiper">
    <Swiper class="swiperItem"> 
      <SwiperItem  v-for="item in detailSwiperData">
        <img :src="item" alt="" />
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "detailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    detailSwiperData: {
      type: Array,
      default() {
        return [];
      },
    },
  }
};
</script>

<style scope>
  .swiperItem{
    height: 300px;
  }
</style>