import { storiesOf } from '@storybook/vue'

import RnDropdown from './index.vue'

const stories = storiesOf('Dropdowns', module)

stories.add('Default', () => ({
  components: { RnDropdown },
  data() {
    return {
      month: null,
      options: [
        { value: '1', label: 'Jan' },
        { value: '2', label: 'Feb' },
        { value: '3', label: 'Mar' },
        { value: '4', label: 'Apr' },
        { value: '5', label: 'May' },
        { value: '6', label: 'Jun' },
        { value: '7', label: 'Jul' },
        { value: '8', label: 'Aug' },
        { value: '9', label: 'Sep' },
        { value: '10', label: 'Oct' },
        { value: '11', label: 'Nov' },
        { value: '12', label: 'Dec' },
      ],
    }
  },
  template: `<rn-dropdown label="Select Option" :options="options" v-model="month" />`,
}))

stories.add('With helper', () => ({
  components: { RnDropdown },
  data() {
    return {
      month: null,
      options: [
        { value: '1', label: 'Jan' },
        { value: '2', label: 'Feb' },
        { value: '3', label: 'Mar' },
        { value: '4', label: 'Apr', helper: 'Now' },
        { value: '5', label: 'May' },
        { value: '6', label: 'Jun' },
        { value: '7', label: 'Jul' },
        { value: '8', label: 'Aug' },
        { value: '9', label: 'Sep' },
        { value: '10', label: 'Oct' },
        { value: '11', label: 'Nov' },
        { value: '12', label: 'Dec', helper: 'Christmas' },
      ],
    }
  },
  template: `<rn-dropdown :options="options" label="Select Option" v-model="month"/>`,
}))
