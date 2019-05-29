import uuid from 'uuid'

import '@royalnavy/css-framework/src/components/_input.scss'

export default {
  name: 'RnInput',
  props: {
    id: {
      type: String,
      default: uuid(),
    },
    name: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    rows: {
      type: Number,
      default: 5,
    },
    cols: {
      type: Number,
      default: 80,
    },
  },
  data: () => ({
    focus: false,
  }),
  computed: {
    isTextArea() {
      return this.type === 'textarea'
    },
    hasContent() {
      return this.value.length || this.focus
    },
  },
  methods: {
    updateSelf(event) {
      this.$emit('input', event.target.value)
    },
    setFocus() {
      this.focus = true
    },
    looseFocus() {
      this.focus = false
    },
  },
}
