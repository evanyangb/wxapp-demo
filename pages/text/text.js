const app = getApp()
Page({
  data: {
    obj: {
      name: '张三',
      phone: '1888888888',
      address: '中国'
    }
  },
  onLoad (options) {
  },
  navigateGoto () {
    wx.navigateTo({
      url: '/pages/helloworld/helloworld?title=navigateTo'
    })
  },
  redirectToGoto () {
    wx.redirectTo({
      url: '../helloworld/helloworld?title=redirectTo'
    })
  },
  navigateBackGoto () {
    wx.navigateBack({
      delta: 1
    })
  }
})