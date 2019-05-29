import '@royalnavy/css-framework/src/components/_avatar.scss'

export default {
  name: 'RnAvatar',
  props: {
    initials: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'default',
    },
  },
}
