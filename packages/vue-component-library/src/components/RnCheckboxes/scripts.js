import '@royalnavy/css-framework/src/components/_checkbox.scss'

export default {
  props: {
    legend: String,
    name: String,
    options: {
      type: Array,
      default: () => [],
    },
    values: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    optionsWithState() {
      const { values } = this

      const result = this.options.map(option => ({
        ...option,
        checked: values.includes(option.value),
      }))
      return result
    },
    hasLegend() {
      return this.legend && this.legend.length > 0
    },
  },
  methods: {
    update(value) {
      let values = this.value.slice(0)

      if (values.includes(value)) {
        values = values.filter(item => item !== value)
      } else {
        values.push(value)
      }

      this.$emit('input', values)
    },
  },
}
