// 获取详细地址--拼接字符串
const getTheDescAddress = function(addressArr, index) {
  if (addressArr[index].province !== addressArr[index].city && addressArr[index].city !== '县') {
    addressArr[index].all = addressArr[index].province + addressArr[index].city + addressArr[index].area + addressArr[index].detlAddr
  } else {
    addressArr[index].all = addressArr[index].province + addressArr[index].area + addressArr[index].detlAddr
  }
}

// 处理时间戳
const filterTime = (time) => {
  let date = new Date(time * 1000)
  let Y = date.getFullYear()
  let M = date.getMonth() + 1
  let D = date.getDate()
  // let h = date.getHours()
  // let m = date.getMinutes()
  M = M > 9 ? M : '0' + M
  D = D > 9 ? D : '0' + D
  // m = m > 9 ? m : '0' + m
  return Y + '-' + M + '-' + D
}

// 获取当前日期
const getToday = () => {
  let date = new Date()

  let Y = date.getFullYear()
  let M = date.getMonth() + 1
  let D = date.getDate()
  let H = date.getHours()
  let Min = date.getMinutes()
  let S = date.getSeconds()

  M = M > 9 ? M : '0' + M
  D = D > 9 ? D : '0' + D
  H = H > 9 ? H : '0' + H
  Min = Min > 9 ? Min : '0' + Min
  S = S > 9 ? S : '0' + S

  let day = Y + '年' + M + '月' + D + '日'
  let time = H + ':' + Min + ':' + S
  let obj = {
    day,
    time
  }
  return obj
}

export default {
  getTheDescAddress,
  filterTime,
  getToday
}
