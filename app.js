App({
  onLaunch (obj) {
    // console.log(this.route)
    // console.log(111, obj)
  },
  onShow (obj) {
    // console.log(this.route)
    // console.log(222, obj)
  },
  onHide () {
    wx.setTopBarText({
      text: '下一趟车将在两分钟后到达',
      success (res) {
        console.log('success', res)
      },
      complete (res) {
        console.log('complete', res)
      }
    })
  },
  globalData: {
    a: 1,
    b: 2,
    c: 3
  }
})