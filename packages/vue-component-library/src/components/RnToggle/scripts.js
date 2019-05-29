import '@royalnavy/css-framework/src/components/_toggle.scss'

export default {
  name: 'rn-toggle',

  props: {
    name: String,
    label: String,
    value: {
      required: true,
    },
    trueValue: {
      default: true,
    },
    falseValue: {
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isActive: false,
      isChecked: this.value === this.trueValue || this.checked,
    }
  },

  computed: {
    classes() {
      return [
        { 'is-checked': this.isChecked },
        { 'not-checked': !this.isChecked },
        { 'is-active': this.isActive },
        { 'is-disabled': this.disabled },
      ]
    },
  },

  watch: {
    value() {
      this.isChecked = this.value === this.trueValue
    },
  },

  methods: {
    focus() {
      this.$refs.input.focus()
    },

    onClick(e) {
      this.isChecked = !this.isChecked
      const emitValue = this.isChecked ? this.trueValue : this.falseValue

      this.$emit('input', emitValue)
      this.$emit('change', emitValue)
    },

    onFocus(e) {
      this.isActive = true
      this.$emit('focus', e)
    },

    onBlur(e) {
      this.isActive = false
      this.$emit('blur', e)
    },
  },
}
