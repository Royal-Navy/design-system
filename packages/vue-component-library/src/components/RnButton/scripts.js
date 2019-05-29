import RnIcon from '../RnIcon/index.vue'

import '@royalnavy/css-framework/src/components/_button.scss'

export default {
  name: 'RnButton',
  props: {
    state: String,
    icon: {
      type: String,
      required: false,
    },
  },
  components: {
    RnIcon,
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
