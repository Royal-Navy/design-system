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
