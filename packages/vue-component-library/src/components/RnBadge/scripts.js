import '@royalnavy/css-framework/src/components/_badge.scss'

export default {
  name: 'RnBadge',

  props: {
    state: String,
    type: String,
    size: {
      type: String,
      default: 'default',
    },
  },
}
