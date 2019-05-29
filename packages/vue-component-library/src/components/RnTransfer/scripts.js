import '@royalnavy/css-framework/src/components/_transfer.scss'

export default {
  name: 'RnTransfer',

  props: {
    listData: !Array,
    leftHeader: String,
    rightHeader: String,
  },

  data: () => ({
    listDataMutable: [],
  }),
  created() {
    this.listDataMutable = this.listData
  },

  computed: {
    leftList() {
      return this.listDataMutable.filter(item => item.list === 'left')
    },

    rightList() {
      return this.listDataMutable.filter(item => item.list === 'right')
    },
  },

  methods: {
    move(item, side) {
      const itemCopy = item

      if (itemCopy.checked) itemCopy.list = side
      itemCopy.checked = false
      this.$emit('moved', this.listData)

      return itemCopy
    },

    to_left() {
      this.rightList.map(item => this.move(item, 'left'))
    },

    to_right() {
      this.leftList.map(item => this.move(item, 'right'))
    },
  },
}
