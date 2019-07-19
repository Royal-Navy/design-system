export default {
  props: {
    legend: String,
    name: String,
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
    },
  },
  computed: {
    optionsWithState() {
      const { value } = this

      const result = this.options.map(option => ({
        ...option,
        checked: value === option.value,
      }))
      return result
    },
    hasLegend() {
      return this.legend && this.legend.length > 0
    },
  },
  methods: {
    update(value) {
      this.$emit('input', value)
    },
  },
}
