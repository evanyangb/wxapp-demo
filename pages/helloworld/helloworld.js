// pages/helloworld/helloword.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    theName: '123',
    html: '<div style="color: blue;font-size: 18rpx;">yangbo</div>',
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'color: green;font-size: 18rpx'
      },
      children: [
        
        {
          type: 'node',
          name: 'div',
          attrs: {
            class: 'div_children',
            style: 'color: orange;font-size: 20rpx'
          },
          children: [
            {
              type: 'text',
              text: '儿子内容'
            }
          ]
        },
        {
          type: 'node',
          name: 'div',
          attrs: {
            class: 'div_children',
            style: 'color: blue;font-size: 20rpx'
          },
          children: [
            {
              type: 'text',
              text: '儿子内容'
            }
          ]
        }
      ]
    }],
    items: [
      {name: '商品A'},
      {name: '商品B'},
      {name: '商品C'},
      {name: '商品D'},
      {name: '商品E'},
      {name: '商品F'},
    ],
    condition: Math.floor(Math.random() * 3 + 1)
  },

  updateItems (event) {
    const randomIndex = Math.floor(Math.random() * this.data.items.length)
    const items = Object.assign([], this.data.items)
    items.splice(randomIndex, event.target.dataset.num, { name: `商品${randomIndex}` })
    console.log(event)
    this.setData({
      items: items
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})