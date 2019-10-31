// 引入发送请求方法
import wxRequset from '../utils/wxRequset'

// 设置请求API的基准路径
wxRequset.baseUrl = `https://oa.jointas.com`
// wxRequset.baseUrl = `http://192.168.8.90`

// 获取优惠券
const getCoupon = params => {
  return wxRequset('/jtds/Sendcoupon/getCoupon2', params).then(res => res.data)
}
// 判断是否领取过优惠券
const isGet = params => {
  return wxRequset('/jtds/Sendcoupon/isGet', params).then(res => res.data)
}
export default {
  getCoupon,
  isGet
}
