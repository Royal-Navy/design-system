import RnButton from '../RnButton/index.vue'
import RnCard from '../RnCard/index.vue'

export default {
  name: 'RnDialog',
  components: {
    RnCard,
    RnButton,
  },
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
  methods: {
    clickCancel() {
      this.$emit('cancel')
    },
    clickAction() {
      this.$emit('action')
    },
  },
}
