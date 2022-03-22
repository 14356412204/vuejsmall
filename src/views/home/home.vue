<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'
export default {
  name: "home",
  data(){
    return{
      Multidata:''
    }
  },
  components: {
    NavBar
  },
  created(){
    getHomeMultidata().then(res=>{
      this.Multidata = res.data
      })
  }
};

</script>

<style>
.home-nav{
  background-color: var(--color-tint);
  color: white;
}
</style>