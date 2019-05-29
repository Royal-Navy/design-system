import '@royalnavy/css-framework/src/components/_table.scss'

export default {
  name: 'RnTable',
  props: {
    caption: String,
    headings: Array,
    tableData: Array,
    sortable: Boolean,
  },
  data: () => ({
    sortOrder: 'unsorted',
    sortNext: 'unsorted',
    idxSorted: null,
    tableDataMutable: [],
  }),
  created() {
    this.tableDataMutable = this.tableData
  },
  computed: {
    sorted() {
      this.tableDataMutable =
        this.sortOrder !== 'unsorted'
          ? [...this.tableData].sort((a, b) =>
              this.compare(a, b, this.sortOrder) ? -1 : 1
            )
          : this.tableData
      return this.tableDataMutable
    },
  },
  methods: {
    sort_type(order, next) {
      this.sortOrder = order
      this.sortNext = next
    },
    compare(a, b) {
      return this.sortOrder === 'asc'
        ? a[this.idxSorted] > b[this.idxSorted]
        : a[this.idxSorted] < b[this.idxSorted]
    },
    sort_column(index) {
      if (!this.sortable) return false
      this.idxSorted = index
      if (this.sortNext === 'asc') this.sort_type('asc', 'desc')
      else if (this.sortNext === 'desc') this.sort_type('desc', 'unsorted')
      else this.sort_type('unsorted', 'asc')
      return true
    },
  },
}
