// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ifLike: {
      type: Boolean
    },
    likeNum: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindLike: function () {
      let ifLike = this.properties.ifLike
      let likeNum = this.properties.likeNum
      likeNum = ifLike ? likeNum - 1 : likeNum + 1
      this.setData({
        ifLike: !ifLike,
        likeNum: likeNum
      })

      let behavior = this.properties.ifLike ? 'like' : 'cancel'
      this.triggerEvent('like', {
        behavior: behavior
      }, {})
    }
  }
})
