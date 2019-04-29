export default {
  name: 'RnTransfer',

  props: {
    listData: !Array,
    leftHeader: String,
    rightHeader: String
  },

  computed: {
    leftList () {
      return this.listData.filter(item => item.list === 'left')
    },

    rightList () {
      return this.listData.filter(item => item.list === 'right')
    }
  },

  methods: {
    move (item, side) {
      if (item.checked === true) {
        // eslint-disable-next-line no-param-reassign
        item.list = side
      }
      // eslint-disable-next-line no-param-reassign
      item.checked = false
      this.$emit('moved', this.listData)
    },

    to_left () {
      this.rightList.map(item => this.move(item, 'left'))
    },

    to_right () {
      this.leftList.map(item => this.move(item, 'right'))
    }
  }
}