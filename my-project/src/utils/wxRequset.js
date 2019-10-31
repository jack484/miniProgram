import wepy from 'wepy'

// 封装用于发送请求的函数
const weRequset = (url, params = {}) => {
  return wepy.request({
    url: weRequset.baseUrl + url, // 开发者服务器接口地址",
    data: params.data || {}, // 请求的参数",
    method: params.method || 'GET',
    dataType: params.dataType || 'json', // 如果设为json，会尝试对返回的数据做一次 JSON.parse
    header: params.header || { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
}

// 设置基本的url路径
weRequset.baseUrl = ''
export default weRequset
