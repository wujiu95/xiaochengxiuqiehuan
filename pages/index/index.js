//index.js
//获取应用实例
const app = getApp()
let arr = require('./../../utils/Language')
Page({
  data: {
    arr:{},
    index:0,//0中文 1英文
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
  change(){
    if(this.data.index == 0){
       this.setData({
        index:1 
       })
    } else {
      this.setData({
        index:0 
       })
    }
    this.setData({
      arr:arr.arr[this.data.index]
    })
  },
  onShow(){
    console.log(arr.arr)
    this.setData({
      arr:arr.arr[this.data.index]
    })
  }
 
})
