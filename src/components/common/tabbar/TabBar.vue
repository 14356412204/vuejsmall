<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar'
};
</script>

<style>
#tab-bar {
  width: 100%;
  display: flex;
  position: fixed;
  background-color: #f6f6f6;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(182, 182, 182, 0.3);
}

</style>