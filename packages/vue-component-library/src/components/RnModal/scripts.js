import RnButton from '../RnButton/index.vue'
import RnCard from '../RnCard/index.vue'

import '@royalnavy/css-framework/src/components/_modal.scss'

export default {
  name: 'RnModal',
  components: {
    RnCard,
    RnButton,
  },
  data: () => ({
    isOpen: false,
  }),
  props: {
    title: String,
    hideCancel: {
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
