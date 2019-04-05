export default {
  name: 'RnDropdown',
  props: {
    helper: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    options: {
      type: Array,
      required: true,
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
      const { open, options } = this

      if (options.length > 0 && typeof options[0] === 'string') {
        return options.map(value => ({
          value,
          label: value,
        }))
      }

      return options
    },
    selectedOptionLabel() {
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
