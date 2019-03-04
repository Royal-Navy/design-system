import { storiesOf } from '@storybook/vue'

import RnDropdown from './index.vue'

storiesOf('Dropdowns', module).add('Default', () => ({
  components: { RnDropdown },
  data() {
    return {
      count: '2',
      options: [{ value: '1', label: 'One' }, { value: '2', label: 'Two' }],
    }
  },
  template: `<rn-dropdown :options="options" v-model="count" />`,
}))
