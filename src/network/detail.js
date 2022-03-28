import {request} from './request'
export function getDetailData(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
export class GoodsInfo{
  constructor(intemInfo,columns,services){
    this.title = intemInfo.title
    this.desc = intemInfo.desc
    this.newPrice = intemInfo.price
    this.oldPrice = intemInfo.oldPrice
    this.discount = intemInfo.discountDesc
    this.discountBgc = intemInfo.discountBgColor
    this.columns  = columns
    this.services = services
    this.realPrice = intemInfo.lowNowPrice
  }
}