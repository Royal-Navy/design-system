export default {
  name: 'RnDropdown',
  props: {
    label: {
      type: String,
      required: false,
    },
    options: {
      type: Array,
      required: true,
      default: [],
    },
    value: {
      type: String,
      required: false,
    },
  },

  data: () => ({
    open: false,
  }),

  computed: {
    styles() {
      return `rn-dropdown ${this.size} ${this.open ? 'is-open' : ''}`
    },
    formattedOptions() {
      const { options } = this

      if (options.length > 0 && typeof options[0] === 'string') {
        return options.map(value => ({
          value,
          label: value,
        }))
      }

      return options
    },
    selectedOptionLabel() {
      if (this.linkOptions) {
        return this.label || 'Select option'
      }

      const { formattedOptions, label, value } = this
      const selectedOption = formattedOptions.find(
        option => option.value === value
      )

      if (!selectedOption && label && label.length > 0) {
        return label
      }

      if (!selectedOption) {
        return formattedOptions[0].label
      }

      return selectedOption.label
    },
    linkOptions() {
      return this.options && this.options.length > 0 && this.options[0].href
    },
  },

  methods: {
    selectOption({ value }) {
      this.open = false
      this.$emit('input', value)
    },
    toggle() {
      this.open = !this.open
    },
  },
}
