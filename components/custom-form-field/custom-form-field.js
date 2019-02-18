Component({
  behaviors: ['wx://form-field'],

  lifetimes: {
    attached () {
      this.setData({
        value: 'custom-value'
      })
    }
  }
})