const order = ['green', 'yellow', 'blue', 'red']
Page({
  data: {
    toView: 'green',
    scrollTop: 100
  },
  upper (e) {
    console.log('滚动条到达顶部', e)
  },
  lower (e) {
    console.log('滚动条到达底部', e)
  },
  scroll (e) {
    console.log('触发滚动事件', e)
  },
  tap () {
    this.setData({
      toView: order[Math.floor(Math.random() * order.length)]
    })
  },
  tapmove () {
    this.setData({
      scrollTop: this.data.scrollTop + 20
    })
  }
})