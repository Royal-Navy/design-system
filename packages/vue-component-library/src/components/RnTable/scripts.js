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
  computed: {
    sorted () {
      if (this.sortOrder === 'asc') this.tableDataMutable = [...this.tableData].sort((a, b) => (a[this.idxSorted] > b[this.idxSorted]) ? -1 : 1)
      else if (this.sortOrder === 'desc') this.tableDataMutable = [...this.tableData].sort((a, b) => (a[this.idxSorted] < b[this.idxSorted]) ? -1 : 1)
      else this.tableDataMutable = this.tableData
      return this.tableDataMutable
    }
  },
  methods: {
    sort_type (order, next) {
      this.sortOrder = order
      this.sortNext = next
    },
    sort_column (index) {
      if (!this.sortable) return false
      this.idxSorted = index
      if (this.sortNext === 'asc') this.sort_type('asc', 'desc')
      else if (this.sortNext === 'desc') this.sort_type('desc', 'unsorted')
      else this.sort_type('unsorted', 'asc')
      return true
    },
  }
}
