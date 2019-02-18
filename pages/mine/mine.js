Page({
  setTopBarText () {
    wx.setTopBarText({
      text: '杨波',
      success (res) {
        console.log('设置成功', res)
      },
      complete (res) {
        console.log('设置完成', res)
      }
    })
  },


  showNavigationBarLoading () {
    wx.showNavigationBarLoading()
  },
  hideNavigationBarLoading () {
    wx.hideNavigationBarLoading()
  },
  setNavigationBarTitle () {
    wx.setNavigationBarTitle({
      title: '新设置的标题',
      success (res) {
        console.log('设置新标题成功', res)
      },
      complete (res) {
        console.log('设置新标题完成', res)
      }
    })
  },
  setNavigationBarColor () {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#080023',
      animation: {
        duration: '500',
        timingFunc: 'linear'
      },
      success (res) {
        console.log('设置导航条颜色成功', res)
      },
      complete (res) {
        console.log('设置导航条颜色完成', res)
      }
    })
  },


  showTabBar () {
    wx.showTabBar()
  },
  hideTabBar () {
    wx.hideTabBar()
  },
  setTabBarBadge () {
    wx.setTabBarBadge({
      index: 0,
      text: 'abc'
    })
  },
  removeTabBarBadge () {
    wx.removeTabBarBadge ({
      index: 0
    })
  },
  showTabBarRedDot () {
    wx.showTabBarRedDot({
      index: 1
    })
  },
  hideTabBarRedDot () {
    wx.hideTabBarRedDot({
      index: 1
    })
  },
  setTabBarItem () {
    wx.setTabBarItem({
      index: 1,
      text: '新日志'
    })
  },
  setTabBarStyle () {
    wx.setTabBarStyle({
      selectedColor: '#ff005e'
    })
  }
})