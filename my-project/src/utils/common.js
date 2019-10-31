// 过滤学校类型
const filterSchoolType = (type) => {
  switch (type) {
    case '0':
      type = ''
      break
    case '1':
      type = '综合'
      break
    case '2':
      type = '工科'
      break
    case '3':
      type = '师范'
      break
    case '4':
      type = '财经'
      break
    case '5':
      type = '政法'
      break
    case '6':
      type = '语言'
      break
    case '7':
      type = '医药'
      break
    case '8':
      type = '农业'
      break
    case '9':
      type = '林业'
      break
    case '10':
      type = '民族'
      break
    case '11':
      type = '艺术'
      break
    case '12':
      type = '体育'
      break
    case '13':
      type = '军事'
      break
  }
  return type
}

// tab栏控制
const handleChangeFor = (showTabBody, index) => {
  for (let i = 0; i < showTabBody.length; i++) {
    showTabBody[i] = false
    if (index === i + 1) {
      showTabBody[i] = true
    }
  }
}

// 处理时间戳
const filterTime = (time) => {
  let date = new Date(time * 1000)
  let Y = date.getFullYear()
  let M = date.getMonth() + 1
  let D = date.getDate()
  let h = date.getHours()
  let m = date.getMinutes()
  M = M > 9 ? M : '0' + M
  D = D > 9 ? D : '0' + D
  m = m > 9 ? m : '0' + m
  return Y + '-' + M + '-' + D + '  ' + h + ':' + m
}

export default {
  filterSchoolType,
  handleChangeFor,
  filterTime
}
