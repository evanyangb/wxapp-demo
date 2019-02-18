Component({
  relations: {
    './relation-parent': {
      type: 'parent',
      linked (target) {
        console.log('每次插入到relation-parent时触发', target)
      },
      linkChanged (target) {
        console.log('每次移动后执行relation-parent触发', target)
      },
      unlinked (target) {
        console.log('每次移除后执行relation-parent触发', target)
      }
    }
  }
})