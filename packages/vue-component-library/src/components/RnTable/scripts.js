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
  created () { 
    this.tableDataMutable = this.tableData 
  },
  methods: {
    sort_type (order, next) {
      this.sortOrder = order
      this.sortNext = next
    },
    sort_column (index) {
      if (!this.sortable) return false
      this.idxSorted = index
      if (this.sortNext === 'asc') {
        this.sort_type('asc', 'desc')
        this.tableDataMutable = [...this.tableData].sort((a, b) => (a[index] > b[index]) ? -1 : 1)
        return this.tableDataMutable
      }
      if (this.sortNext === 'desc') {
        this.sort_type('desc', 'unsorted')
        this.tableDataMutable = [...this.tableData].sort((a, b) => (a[index] < b[index]) ? -1 : 1)
        return this.tableDataMutable
      }
      if (this.sortNext === 'unsorted') {
        this.sort_type('unsorted', 'asc')
        this.tableDataMutable = this.tableData
        return this.tableDataMutable
      }
      return false
    },
  }
}
