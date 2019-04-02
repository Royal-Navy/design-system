import RnButton from '../RnButton/index.vue'
import RnCard from '../RnCard/index.vue'

export default {
  name: 'RnAlert',
  components: {
    RnCard,
    RnButton,
  },
  data: () => ({
    isOpen: false,
  }),
  props: {
    title: String,
    state: String,
    hideClose: {
      type: Boolean,
      default: false,
    },
    hideAction: {
      type: Boolean,
      default: false,
    },
    actionButtonText: {
      type: String,
      default: 'OK',
    },
    error: Boolean,
  },
}
