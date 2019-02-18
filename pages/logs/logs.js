Page({
  formBubmit (e) {
    console.log(e.detail)
  },
  onLoad () {
    // console.log('logs', this.selectComponent('#component-export'))
    console.log('父组件-onLoad', this)
  },
  onShow () {
    console.log('父组件-onShow', this)
  },
  onReady () {
    console.log('父组件-onReady', this)
  }
})