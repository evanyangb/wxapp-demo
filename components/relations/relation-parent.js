Component({
  relations: {
    './relation-child': {
      type: 'child',
      linked (target) {
        console.log('每次relation-chld插入后触发', target)
      },
      linkChanged (target) {
        console.log('每次relation-child移动后触发', target)
      },
      unlinked (target) {
        console.log('每次relation-child移除时触发', target)
      }
    }
  },
  methods: {
    _getAllLi () {
      const nodes = this.getRelationNodes('path/to/relation-child')
      console.log(nodes)
    }
  },
  ready () {
    this._getAllLi()
  }
})