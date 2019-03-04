import RnCard from '../RnCard/index.vue'

export default {
  name: 'RnDropdown',
  components: {
    RnCard,
  },

  props: {
    options: {
      type: Array,
      default: [],
    },
    value: {
      type: String,
    },
  },

  data: () => ({
    open: false,
  }),

  computed: {
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
      const { formattedOptions, value } = this
      const selectedOption = formattedOptions.find(
        option => option.value === value
      )
      const label = selectedOption
        ? selectedOption.label
        : formattedOptions[0].label
      return label
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
