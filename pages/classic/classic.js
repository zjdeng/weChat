//index.js
import {HTTP} from '../../utils/util.js'
//获取应用实例
const app = getApp()
let http = new HTTP()
Page({
  data: {
    ifLike: true,
    likeNum: 111,
    motto: 'Hello Dzj',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    http.request({
      url: 'clinic/vspmanager/process/queryVspTemplateInfoList',
      success: (res) => {
        console.log(res)
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //转发
  onShareAppMessage: function () {
    return {
      title: '转发标题',
      path: '/pages/index'
    }
  }
})
