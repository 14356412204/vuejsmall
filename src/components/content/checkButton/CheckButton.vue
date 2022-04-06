<template>
  <div class="check-button" :class="{checked:isChecked}" >
    ✔
  </div>
</template>

<script>
export default {
  name:'CheckButton',
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style>
  .check-button{
    width: 20px;
    height: 20px;
    line-height: 20px;
    color: white;
    border-radius: 50%;
    background-color: white;
    text-align: center;
    font-size: 20px;
    margin: 0px 5px;
    border: 1px solid rgb(194, 194, 194);
  }
  .checked{
    border-color: var(--color-tint);
    background-color: var(--color-tint);
  }
</style>