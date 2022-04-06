import{
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default{
  addCart(context,payLoad){
    let oldProduct = null
    for(let item of context.state.cartList){
      if(item.iid===payLoad.iid){
        oldProduct = item
      }
    }
    if(oldProduct){
      context.commit('ADD_COUNTER',oldProduct)
    }else{
      context.commit('ADD_TO_CART',payLoad)
    }
  }
}