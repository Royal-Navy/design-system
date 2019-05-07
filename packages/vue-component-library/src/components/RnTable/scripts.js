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
    sort_column (index) {
      if (!this.sortable) return false
      this.idxSorted = index
      switch (this.sortNext) {
        case 'asc':
          this.sortOrder = 'asc'
          this.sortNext = 'desc'
          this.tableDataMutable = [...this.tableData].sort((a, b) => {
            if (a[index] < b[index]) return -1;
            if (a[index] > b[index]) return 1;
            return 0;
          })
          return this.tableDataMutable
        case 'desc':
        this.sortOrder = 'desc'
          this.sortNext = 'unsorted'
          this.tableDataMutable = [...this.tableData].sort((a, b) => {
            if (a[index] > b[index]) return -1;
            if (a[index] < b[index]) return 1;
            return 0;
          })
          return this.tableDataMutable
        default:
        case 'unsorted' :
          this.sortOrder = 'unsorted'
          this.sortNext = 'asc'
          this.tableDataMutable = this.tableData
          return this.tableDataMutable
      }
    },
  }
}
