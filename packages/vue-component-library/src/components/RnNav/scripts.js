import '@royalnavy/css-framework/src/components/_nav.scss'

export default {
  name: 'RnNavigation',
  props: {
    alignment: {
      type: String,
      default: '',
    },
    navItems: {
      type: Array,
      default: () => [],
    },
    orientation: {
      type: String,
      default: 'horizontal',
    },
  },
}
