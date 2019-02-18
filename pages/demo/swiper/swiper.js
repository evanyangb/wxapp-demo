Page({
  data: {
    swiperList: ['A', 'B', 'C'],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    currentInterval: 5000,
    duration: 500,
    currentDuration: 500
  },
  changeIndicatorDots (e) {
    this.setData({
      indicatorDots: e.detail.value
    })
  },
  changeAutoplay (e) {
    this.setData({
      autoplay: e.detail.value
    })
  },
  changeInterval (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  changingInterval (e) {
    this.setData({
      currentInterval: e.detail.value
    })
  },
  changeDuration (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  changingDuration (e) {
    this.setData({
      currentDuration: e.detail.value
    })
  }
})