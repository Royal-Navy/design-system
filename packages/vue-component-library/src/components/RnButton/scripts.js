import RnIcon from '../RnIcon/index.vue'

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
