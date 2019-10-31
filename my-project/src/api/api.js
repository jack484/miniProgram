// 引入发送请求方法
import wxRequset from '../utils/wxRequset'

// 设置请求API的基准路径
wxRequset.baseUrl = `https://www.baokaodaxue.com`
// 设置图片路径
const imageUrl = `https://cj.baokaodaxue.com`
// APP接口登录
// const doWxLogin = params => {
//   return wxRequset('/Passport/Oauth/miniLogin', params).then(res => res.data)
// //   return wxRequset('/Passport/oauth/ydlogin_app', params).then(res => res)
// }
// APP新接口登录
const doWxLogin = params => {
  return wxRequset('/Passport/Oauth/miniLoginNew', params).then(res => res.data)
  //   return wxRequset('/Passport/oauth/ydlogin_app', params).then(res => res)
}
// 小程序获取open_id
const getWxOpenId = params => {
  return wxRequset('/Passport/Oauth/codeUse', params).then(res => res)
}

// 获取用户分数/考区
const getUserkqfs = params => {
  return wxRequset('/yd/v3wode/getgrade', params).then(res => res.data)
}

// 获取首页大学列表&按条件搜索
const getSchoolListSearch = params => {
  return wxRequset('/yd/v3college/searchnew', params).then(res => res.data)
}

// 获取大学资料：录取--年份
const getSchoolInfoYear = params => {
  return wxRequset('/yd/Bkdx_V4college/getyear', params).then(res => res.data)
}

// 获取大学资料：录取--批次、分类
const getSchoolInfoBatch = params => {
  return wxRequset('/yd/Bkdx_V4college/getnewbatch', params).then(res => res.data)
}

// 获取大学资料：录取--院校分
const getSchoolInfoYXF = params => {
  return wxRequset('/yd/Bkdx_V4college/yxf', params).then(res => res.data)
}

// 获取大学资料：录取--专业分
const getSchoolInfoZYF = params => {
  return wxRequset('/yd/Bkdx_V4college/zyf', params).then(res => res.data)
}

// 获取大学资料：大学简介
const getSchoolInfoJJ = params => {
  return wxRequset('/yd/v3college/dxjs', params).then(res => res.data)
}

// 获取大学资料：大学简介--奖学金
const getSchoolInfoJJjxj = params => {
  return wxRequset('/yd/v3jxj/getonejxj', params).then(res => res.data)
}

// 获取大学资料：大学简介--知名校友
const getSchoolInfoJJzmxy = params => {
  return wxRequset('/yd/v3college/zmxy', params).then(res => res.data)
}

// 获取大学资料：大学简介--招生章程--年份
const getSchoolInfoJJzszcYear = params => {
  return wxRequset('/Yd/Bkdx_V4college/guideExist', params).then(res => res.data)
}

// 获取大学资料：大学简介--招生章程--内容
const getSchoolInfoJJzszcContent = params => {
  return wxRequset('/Yd/Bkdx_v4college/getGuide', params).then(res => res.data)
}

// 获取大学资料：招生计划
const getSchoolInfoJH = params => {
  return wxRequset('/yd/v3college/zsjh', params).then(res => res.data)
}

// 获取大学资料：校园风光
const getSchoolInfoFG = params => {
  return wxRequset('/yd/v3college/xyfg_new', params).then(res => res.data)
}

// 收藏大学
const collectSchool = params => {
  return wxRequset('/yd/v3wode/sc', params).then(res => res.data)
}

// 取消大学收藏
const delCollectSchool = params => {
  return wxRequset('/yd/v3wode/qxsc', params).then(res => res.data)
}

// 获取专业大全
const getAllSubject = params => {
  return wxRequset('/yd/v3major/getmajor', params).then(res => res.data)
}

// 收藏专业
const collectSubject = params => {
  return wxRequset('/yd/v3major/sczy', params).then(res => res.data)
}

// 取消收藏专业
const delCollectSubject = params => {
  return wxRequset('/yd/v3major/qxsc', params).then(res => res.data)
}

// 专业详情--专业介绍
const getSubjectIntr = params => {
  return wxRequset('/yd/v3major/zyjs', params).then(res => res.data)
}

// 专业详情--就业前景
const getSubjectFuture = params => {
  return wxRequset('/yd/v3major/jyqj', params).then(res => res.data)
}

// 专业详情--开设院校
const getSubjectKSYX = params => {
  return wxRequset('/yd/v3major/ksyx', params).then(res => res.data)
}

// 获取我的资料
const getMyInfo = params => {
  return wxRequset('/yd/Bkdx_V4kaofen/pipei', params).then(res => res.data)
}

// 获取我的收藏
const getMyCollect = params => {
  return wxRequset('/yd/v3wode/wdsc_new', params).then(res => res.data)
}
// /yd/v3wode/wdsc

// 更改考区
const selectKQ = params => {
  return wxRequset('/yd/Bkdx_V4zhuanjia/gaikq', params).then(res => res.data)
}

// 关键字条件搜索接口--院校
const searchKeyWord = params => {
  return wxRequset('/yd/v3college/gjz', params).then(res => res.data)
}

// 模糊搜索接口--院校
const searchMHWord = params => {
  return wxRequset('/yd/v3college/mhs', params).then(res => res.data)
}

// 模糊搜索接口--专业
const searchSubject = params => {
  return wxRequset('/yd/v3major/mhzy', params).then(res => res.data)
}

// 获取新闻轮播图列表
const getNewsListlbt = params => {
  return wxRequset('/yd/xinwen/show_new', params).then(res => res.data)
}

// 获取新闻列表
const getNewsList = params => {
  return wxRequset('/yd/xinwen/fenye_new', params).then(res => res.data)
}

// 点击跳转到轮播图详情
const getNewsListlbtDesc = params => {
  return wxRequset('/yd/xinwen/detail', params).then(res => res.data)
}

// 点击跳转到新闻详情
const getNewsListNewDesc = params => {
  return wxRequset('/yd/xinwen/detail', params).then(res => res.data)
}

// 大学专业录取分数详情
const getSchoolSubDesc = params => {
  return wxRequset('/yd/v3college/zyfxq', params).then(res => res.data)
}

// 性格测试提交
const setInterestResult = params => {
  return wxRequset('/yd/xingge/miniTest', params).then(res => res.data)
}
// 最新性格测试结果
const getInterestResult = params => {
  return wxRequset('/yd/xingge/getMiniTest', params).then(res => res.data)
}
// 抽奖接口
const getGiftGoods = params => {
  return wxRequset('/yd/xingge/miniLottery', params).then(res => res.data)
}
// 抽奖记录
const getGiftList = params => {
  return wxRequset('/yd/xingge/getRecord', params).then(res => res.data)
}
// 抽奖兑换码
const getGiftCode = params => {
  return wxRequset('/yd/xingge/getCode', params).then(res => res.data)
}
// 图片验证码
const getImageCode = params => {
  return wxRequset('/Passport/Tupian/miniCreateCode', params).then(res => res)
}
// 绑定手机 检测是否注册
const isPhoneZhuce = params => {
  return wxRequset('/passport/zhuce/notuser', params).then(res => res.data)
}
// 发送验证短信
const sendPhoneMsg = params => {
  return wxRequset('/passport/duanxin/bkSend', params).then(res => res.data)
}
// 绑定手机号
const bindPhone = params => {
  return wxRequset('/passport/bindphone/do', params).then(res => res.data)
}

export default {
  doWxLogin,
  getUserkqfs,
  getSchoolListSearch,
  getMyInfo,
  getMyCollect,
  selectKQ,
  getWxOpenId,
  getSchoolInfoYear,
  getSchoolInfoBatch,
  getSchoolInfoYXF,
  getSchoolInfoZYF,
  getSchoolInfoJJ,
  getSchoolInfoJJjxj,
  getSchoolInfoJJzmxy,
  getSchoolInfoJJzszcYear,
  getSchoolInfoJJzszcContent,
  getSchoolInfoJH,
  getSchoolInfoFG,
  getAllSubject,
  getSubjectIntr,
  getSubjectFuture,
  getSubjectKSYX,
  collectSubject,
  delCollectSubject,
  collectSchool,
  delCollectSchool,
  searchKeyWord,
  searchMHWord,
  searchSubject,
  getNewsListlbt,
  getNewsList,
  getNewsListlbtDesc,
  getNewsListNewDesc,
  getSchoolSubDesc,
  setInterestResult,
  getInterestResult,
  getGiftGoods,
  getGiftList,
  getGiftCode,
  imageUrl,
  isPhoneZhuce,
  sendPhoneMsg,
  bindPhone,
  getImageCode
}
