import '@royalnavy/css-framework/src/components/_progress.scss'

export default {
  name: 'RnProgress',
  props: {
    value: {
      type: String,
      default: '0',
    },
    max: {
      type: String,
      default: '100',
    },
    min: {
      type: String,
      default: '0',
    },
    size: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    percentage() {
      const max = parseInt(this.max, 10)
      const min = parseInt(this.min, 10)
      const value = parseInt(this.value, 10)

      const percent = (value / (max - min)) * 100
      return `${percent}%`
    },
  },
}
