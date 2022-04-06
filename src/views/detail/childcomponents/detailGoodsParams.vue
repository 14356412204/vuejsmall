<template>
  <div id="goodsParams" v-if="Object.keys(paramsInfo).length !== 0 ">
    <div class="goodsParamsKey">{{paramsInfo.info.key}}</div>
    <ul v-for="items in paramsInfo.rule.tables[0]" class="paramsTable">
      <li v-for="item in items" class="paramsTableItem">{{item}}</li>
    </ul>
    <ul class="paramsList">
      <li v-for="(item,index) in paramsInfo.info.set" class="paramsListItem">
        <div class="key">{{item.key}}</div>
        <div class="value">{{item.value}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'detailGoodsParams',
  props:{
    paramsInfo:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  
}
</script>

<style>
  #goodsParams{
    padding-bottom: 20px;
    border-bottom: 5px solid rgba(230, 229, 229, 0.671);
  }
  .paramsListItem{
    display: flex;
    font-size: 14px;
  }
  .paramsListItem{
    border-bottom: 1px solid rgba(230, 229, 229, 0.671);
    height: 55px;
    align-items: center;
    
  }
  .paramsListItem .key{
    flex: 1;
    padding-left: 31px;
  }
  .paramsListItem .value{
    flex: 3;
    padding-left: 30px;
    vertical-align: middle;
    color: var(--color-tint);
  }
  .paramsTable{
    text-align: center;
    display: flex;
  }
  .goodsParamsKey{
    text-align: center;
    padding: 7px 5px;
    border-bottom: 1px solid rgba(230, 229, 229, 0.671);
  }
  .paramsTableItem{
    list-style: none;
    flex: 1;
    padding: 7px 5px;
    border-bottom: 1px solid rgba(230, 229, 229, 0.671);
  }
</style>