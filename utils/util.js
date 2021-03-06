import {config} from '../config.js'
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

class HTTP {
  request (params) {
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        const code = res.data.responseType
        if (code === 'N') {
          params.success && params.success(res.data.responseData)
        } else {
          wx.showToast({
            title: '错误',
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: () => {

      }
    })
  }
}

module.exports = {
  formatTime: formatTime,
  HTTP: HTTP
}
// export {HTTP}
