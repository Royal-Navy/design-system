import uuid from 'uuid/v4'

export default {
  name: 'RnTransfer',
  props: {
    listData: !Array,
    leftHeader: String,
    rightHeader: String,
    showCounts: {
      type: Boolean,
      default: false
    },
    showSelectAll: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    leftList () {
      return this.listData.filter(item => { 
        return (item.list === 0) ? item : null
      })
    },
    rightList () {
      return this.listData.filter(item => {
        return (item.list === 1) ? item : null
      })
    }
  },
  methods: {
    // Looks for checked items in the right column and moves them to the left
    to_left() {
      console.log('move left')
    },
    // Looks for checked items in the left column and moves them to the right
    to_right() {
      console.log('move right')
    }
  }
}