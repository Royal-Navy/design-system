import RnCard from '../RnCard/index.vue'

export default {
  name: 'RnAlert',

  components: {
    RnCard,
  },

  props: {
    title: {
      type: String,
    },
    state: {
      type: String,
      default: 'default',
    },
  },

  data: () => ({
    open: true,
  }),

  computed: {
    classes() {
      return `rn-alert ${this.state}`
    },
  },

  methods: {
    close() {
      this.open = false
      this.$emit('close')
    },
  },
}
