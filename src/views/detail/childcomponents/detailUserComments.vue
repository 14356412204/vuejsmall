<template>
  <div id="UserComments" v-if="Object.keys(commentsInfo).length !== 0 ">
    <div class="commentsTitle"><div>用户评价</div><div>更多</div></div>
    <div class="UserInfo">{{commentsInfo[0].user.uname}}</div>
    <div class="commentsContent">{{commentsInfo[0].content}}</div>
    <div class="goodsInfo">{{commentsInfo[0].created|showDate}}{{commentsInfo[0].style}}</div>
  </div>
</template>

<script>
import {formateDate} from 'components/utils'
export default {
  name:'detailUserComments',
  props:{
    commentsInfo:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  filters:{
    showDate(value){
      // 1.将时间戳转成date对象
      const date = new Date(value*1000)
      // 2.将date进行格式化
      return formateDate(date,'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style>
  #UserComments{
    padding: 10px 10px;
    border-bottom: 5px solid rgba(230, 229, 229, 0.671);
  }
  #UserComments .commentsTitle{
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(230, 229, 229, 0.671);
  }
   
  #UserComments .UserInfo{
    padding: 10px 0px;
  }
  #UserComments .goodsInfo{
    font-size: 12px;
    color: rgb(160, 160, 160);
  }
  #UserComments .commentsContent{
    padding-bottom: 10px;
  }
</style>