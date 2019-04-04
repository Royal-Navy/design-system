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
        { value: '1', label: 'Jan', helper: 'ctrl 1' },
        { value: '2', label: 'Feb', helper: 'ctrl 2' },
        { value: '3', label: 'Mar', helper: 'ctrl 3' },
        { value: '4', label: 'Apr', helper: 'ctrl 4' },
        { value: '5', label: 'May', helper: 'ctrl 5' },
        { value: '6', label: 'Jun', helper: 'ctrl 6' },
        { value: '7', label: 'Jul', helper: 'ctrl 7' },
        { value: '8', label: 'Aug', helper: 'ctrl 8' },
        { value: '9', label: 'Sep', helper: 'ctrl 9' },
        { value: '10', label: 'Oct', helper: 'ctrl 0' },
        { value: '11', label: 'Nov', helper: 'ctrl -' },
        { value: '12', label: 'Dec', helper: 'ctrl +' },
      ],
    }
  },
  template: `<rn-dropdown :options="options" label="Select Option" v-model="month"/>`,
}))
