import {debounce} from 'components/utils'
import BackTop from '@/components/common/backtop/BackTop'
export const itemListenerMixin = {
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,100)
    this.$bus.$on('detailImageLoaded',()=>{
      refresh()
    })
    this.$bus.$on('recommendDataImg',()=>{
      refresh()
    })
  }
}
export const detailBackTopMixin = {
  data(){
    return{
      positiony:''
    }
  },
  components:{
    BackTop
  },
  computed: {
    isShow(){
      return this.positiony < -1000
    },
  },
  methods:{
    backtopbtn(){
      this.$refs.scroll.scrollTo(0,0,1000)
    }
  },
}
