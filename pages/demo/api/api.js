Page({
  onReady () {
    wx.onAccelerometerChange((res) => {
      console.log('加速度数据', res)
    })
    wx.onCompassChange((res) => {
      console.log('罗盘数据', res)
    })
    wx.onGyroscopeChange((res) => {
      console.log('陀螺仪数据', res)
    })
  },

  getBatteryInfo () {
    wx.getBatteryInfo({
      success (res) {
        console.log('当前电量', res)
      }
    })
  },
  
  // 清空剪切板内容
  clearClipboardData () {
    wx.setClipboardData({
      data: ''
    })
  },
  // 获取剪贴板
  getClipboardData () {
    wx.getClipboardData({
      success (res) {
        console.log('剪贴板内容', res)
      }
    })
  },
  // 设置剪贴板内容
  setClipboardData () {
    wx.setClipboardData({
      data: 'yangbo123',
      success (res) {
        console.log('设置剪贴板内容', res)
      }
    })
  },

  // 添加手机联系人
  addPhoneContact () {
    wx.addPhoneContact({
      firstName: 'aaa123',
      mobilePhoneNumber: '111111111'
    })
  },

  // 获取屏幕亮度
  getScreenBrightness () {
    wx.getScreenBrightness({
      success (val) {
        console.log('屏幕亮度', val)
      }
    })
  },
  // 设置屏幕亮度
  setScreenBrightness () {
    wx.setScreenBrightness({
      value: Math.random().toFixed(2)
    })
  },
  // 保持常亮状态
  setKeepScreenOn () {
    wx.setKeepScreenOn({
      keepScreenOn: true
    })
  },
  // 监听用户截屏事件
  onUserCaptureScreen () {
    wx.onUserCaptureScreen((res) => {
      console.log('用户截屏了', res)
    })
  },
  // 拨打电话
  makePhoneCall () {
    wx.makePhoneCall({
      phoneNumber: '123456455555555'
    })
  },

  // 开始监听加速度数据
  startAccelerometer () {
    wx.startAccelerometer({
      interval: 'normal'
    })
  },
  // 停止监听加速度数据
  stopAccelerometer () {
    wx.stopAccelerometer()
  },

  // 开始监听罗盘数据
  startCompass () {
    wx.startCompass()
  },
  // 停止监听罗盘数据
  stopCompass () {
    wx.stopCompass()
  },

  // 开始监听陀螺仪数据
  startGyroscope () {
    wx.startGyroscope()
  },
  // 停止监听陀螺仪数据
  stopGyroscope () {
    wx.stopGyroscope()
  },

  // 调起客户端界面进行扫码
  scanCode () {
    wx.scanCode({
      success (res) {
        console.log('扫码数据', res)
      }
    })
  },

  // 短时间振动
  vibrateShort () {
    wx.vibrateShort()
  },
  // 长时间振动
  vibrateLong () {
    wx.vibrateLong()
  }
})