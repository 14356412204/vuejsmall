<template>
  <div class="tab-bar-item" @click='active'>
    <div v-if='!isActive'><slot name='item-icon'></slot></div>
    <div v-else><slot name='item-icon-active'></slot></div>
    <div :style="activeStyle"><slot name='item-text'></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'rgb(255, 127, 127)'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !==-1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods:{
    active(){
      this.$router.replace(this.path)
      // isActive=this.$route.path
      // for(let i=0;i<this.$parent.$children.length;i++){
      //   this.$parent.$children[i].isActive=false
      // }
      // this.isActive=!this.isActive
    }
    // homeClick(){
    //   this.$parent.$children[1].isActive=false
    // }
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
</style>