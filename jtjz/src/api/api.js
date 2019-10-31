// 引入发送请求方法
import wxRequset from '../utils/wxRequset'

// 设置请求API的基准路径
wxRequset.baseUrl = `https://oa.jointas.com`
// wxRequset.baseUrl = `http://192.168.8.90`

// 获取短信验证码
const getValidationCode = params => {
  return wxRequset('/jtds/Duanxin/sendsms', params).then(res => res.data)
}

// 登录接口
const doLogin = params => {
  return wxRequset('/jtds/Commerce/login', params).then(res => res)
}

// 更新用户信息
const userInfoUpdate = params => {
  return wxRequset('/jtds/Commerce/userInfoUpdate', params).then(res => res.data)
}

// 判断是否绑定手机号
const userIsBindPhone = params => {
  return wxRequset('/jtds/Commerce/isBindPhone', params).then(res => res.data)
}

// 绑定手机号
const userDoBindPhone = params => {
  return wxRequset('/jtds/Commerce/doBindPhone', params).then(res => res.data)
}

// 新增地址
const userSaveAddr = params => {
  return wxRequset('/jtds/Address/saveAddr', params).then(res => res.data)
}

// 修改地址
const userEditAddr = params => {
  return wxRequset('/jtds/Address/editAddr', params).then(res => res.data)
}

// 获取地址列表
const getUserAddress = params => {
  return wxRequset('/jtds/Address/addrList', params).then(res => res.data)
}

// 删除地址
const userDelAddr = params => {
  return wxRequset('/jtds/Address/delAddr', params).then(res => res.data)
}

// 设置默认地址
const userSetDefaultAddr = params => {
  return wxRequset('/jtds/Address/setDefaultAddr', params).then(res => res.data)
}

// 新增发票
const addInvoice = params => {
  return wxRequset('/jtds/Invoice/addInvoice', params).then(res => res.data)
}

// 获取我的发票
const getInvoice = params => {
  return wxRequset('/jtds/Invoice/invoiceList', params).then(res => res.data)
}

// 删除发票
const delInvoice = params => {
  return wxRequset('/jtds/Invoice/delInvoice', params).then(res => res.data)
}

// 修改发票
const editInvoice = params => {
  return wxRequset('/jtds/Invoice/editInvoice', params).then(res => res.data)
}

// 兑换优惠券
const exchangeCode = params => {
  return wxRequset('/jtds/Coupon/codeToCoupon', params).then(res => res.data)
}

// 获取我的优惠券
const getMyCode = params => {
  return wxRequset('/jtds/Coupon/myCouponList', params).then(res => res.data)
}

// 首页获取商品基本信息
const getIndexGoods = params => {
  return wxRequset('/jtds/Index/indexList', params).then(res => res.data)
}

// 获取商品详情信息
const getGoodDesc = params => {
  return wxRequset('/jtds/Index/goodsDetail', params).then(res => res.data)
}

// 添加到购物车
const addToCart = params => {
  return wxRequset('/jtds/Shopcar/addToCar', params).then(res => res.data)
}

// 获取我的购物车
const getCart = params => {
  return wxRequset('/jtds/Shopcar/myCarList', params).then(res => res.data)
}

// 编辑购物车商品
const editCart = params => {
  return wxRequset('/jtds/Shopcar/editCar', params).then(res => res.data)
}

// 删除购物车商品
const delCart = params => {
  return wxRequset('/jtds/Shopcar/delFromCar', params).then(res => res.data)
}

// 添加收藏
const addCollect = params => {
  return wxRequset('/jtds/Collection/addCollect', params).then(res => res.data)
}

// 删除收藏
const delCollect = params => {
  return wxRequset('/jtds/Collection/delCollect', params).then(res => res.data)
}

// 我的收藏列表
const getCollect = params => {
  return wxRequset('/jtds/Collection/collectList', params).then(res => res.data)
}

// 我的个人信息
const getInfo = params => {
  return wxRequset('/jtds/Info/myInfo', params).then(res => res.data)
}

// 创建订单
const creatOrder = params => {
  return wxRequset('/jtds/Order/addOrder', params).then(res => res.data)
}

// 获取我的订单
const getOrder = params => {
  return wxRequset('/jtds/Order/myOrderList', params).then(res => res.data)
}

// 删除我的订单
const delOrder = params => {
  return wxRequset('/jtds/Order/delMyOrder', params).then(res => res.data)
}

// 确认订单
const signOrder = params => {
  return wxRequset('/jtds/Order/signOrder', params).then(res => res.data)
}

// 发起预支付
const prePayOrder = params => {
  return wxRequset('/jtds/Pay/doPay', params).then(res => res.data)
}

// 是否兑换过邀请码
const isGetYhcode = params => {
  return wxRequset('/jtds/Coupon/isExchanged', params).then(res => res.data)
}

export default {
  getValidationCode,
  doLogin,
  userInfoUpdate,
  userIsBindPhone,
  userDoBindPhone,
  userSaveAddr,
  userEditAddr,
  getUserAddress,
  userDelAddr,
  userSetDefaultAddr,
  addInvoice,
  getInvoice,
  delInvoice,
  editInvoice,
  exchangeCode,
  getMyCode,
  getIndexGoods,
  getGoodDesc,
  addToCart,
  getCart,
  editCart,
  delCart,
  addCollect,
  delCollect,
  getCollect,
  getInfo,
  creatOrder,
  getOrder,
  prePayOrder,
  delOrder,
  signOrder,
  isGetYhcode
}
