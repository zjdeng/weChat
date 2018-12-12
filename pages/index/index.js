//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    ifLike: true,
    likeNum: 111,
    motto: 'Hello Dzj',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 喜欢
  bindLike: function() {
    console.log(this.data.ifLike)
    if (this.data.ifLike) {
      this.setData({
        ifLike: false,
        likeNum: this.data.likeNum - 1
      })
    } else {
      this.setData({
        ifLike: true,
        likeNum: this.data.likeNum + 1
      })
    }
    
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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
