<template>
  <div class="goods">
    <GoodListItem v-for="item in goods" :goodsitem="item"/>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem.vue'
export default {
  name:'GoodList',
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodListItem
  }
}
</script>

<style>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

</style>