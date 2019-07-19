import { storiesOf } from '@storybook/vue'

import RnCheckboxes from './index.vue'

const stories = storiesOf('Checkboxes', module)

stories.add('simple', () => ({
  components: { RnCheckboxes },
  data: () => ({
    options: [
      {
        label: 'One',
        value: '1',
      },
      {
        label: 'Two',
        value: '2',
      },
    ],
    values: ['1'],
    name: 'colour',
  }),
  template:
    '<rn-checkboxes :options="options" :name="name" :values="values" />',
}))

stories.add('legend', () => ({
  components: { RnCheckboxes },
  data: () => ({
    options: [
      {
        label: 'One',
        value: '1',
      },
      {
        label: 'Two',
        value: '2',
      },
    ],
    values: ['1'],
    name: 'colour',
  }),
  template:
    '<rn-checkboxes :options="options" :name="name" :value="values" legend="Colour" />',
}))
