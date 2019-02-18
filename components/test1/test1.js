const myBehavior = require('../../behavior/my-behavior')
Component({
  behaviors: [myBehavior],
  properties: {
    propA: {
      type: String,
      value: '333333',
      observer (newVal, oldVal, key) {
        console.log(newVal, oldVal, key)
      }
    },
    dataB: String
  },
  lifetimes: {
    created () {
      console.log('子组件-created', this, this.data, this.properties)
    },
    attached () {
      console.log('子组件-attached', this, this.data.propA, this.properties.propA)
    },
    ready () {
      console.log('子组件-ready', this, this.data.propA, this.properties.propA)
    }
  },
  pageLifetimes: {
    show () {
      console.log('子组件触发父组件-show')
    },
    hide () {
      console.log('子组件触发父组件-hide')
    },
    resize (size) {
      console.log('子组件触发父组件-resize', size)
    }
  },
  methods: {
    changePropA () {
      this.setData({
        propA: 'yangbo'
      })
    }
  }
  
})