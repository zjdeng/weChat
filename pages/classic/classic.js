//index.js
import { ClassicModel } from '../../models/classic.js'
//获取应用实例
// const app = getApp()
let classic = new ClassicModel()
Page({
  data: {
    ifLike: false,
    likeNum: 111,
    motto: 'Hello Dzj',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    movieSrc: 'images/《饮食男女》@2x.png',
    movieText: '人生不能像做菜，把所有的料准备好了才下锅。',
    indexNum: 0
  },
  onLoad: function () {
    classic.getLatest((res) => {
      console.log(res)
      this.setData({
        classicData: res,
        indexNum: 5
      })
    })
  },
  clickLike: function (event) {
    console.log(event)
  }
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  // //转发
  // onShareAppMessage: function () {
  //   return {
  //     title: '转发标题',
  //     path: '/pages/index'
  //   }
  // }
})
