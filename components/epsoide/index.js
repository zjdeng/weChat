// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      observer: function (val, old, path) {
        let num = val < 10 ? '0' + val : val
        this.setData({
          _index: num
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: 2018,
    month: '七月',
    _index: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
