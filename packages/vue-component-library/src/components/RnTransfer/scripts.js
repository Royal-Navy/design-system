export default {
  name: 'RnTransfer',
  props: {
    listData: !Array,
    leftHeader: String,
    rightHeader: String,
    to_left: Function,
    to_right: Function,
  },
  computed: {
    leftList () {
      return this.listData.filter(item => { 
        if (item.list === 'left') return item
        return false
      })
    },
    rightList () {
      return this.listData.filter(item => {
        if (item.list === 'right') return item
        return false
      })
    }
  },
  methods: {
    // Looks for checked items in the right column and moves them to the left
    to_left() {
      this.moveChecked('left')
    },
    // Looks for checked items in the left column and moves them to the right
    to_right() {
      this.moveChecked('right')
    },
    moveChecked(side) {
      const doMove = (item) => {
        if (item.checked === true) {
          item.list = side
        }
        item.checked = false 
        return false
      }
      return (side === 'right') ? this.leftList.map(item => doMove(item)) : this.rightList.map(item => doMove(item))
    },
  }
}