import { storiesOf } from '@storybook/vue'

import RnRadios from './index.vue'

const stories = storiesOf('Radios', module)

stories.add('simple', () => ({
  components: { RnRadios },
  data: () => ({
    options: [
      {
        label: 'one',
        value: '1',
      },
      {
        label: 'two',
        value: '2',
      },
    ],
    value: '1',
    name: 'colour',
  }),
  template: '<rn-radios :options="options" :name="name" :value="1" />',
}))

stories.add('legend', () => ({
  components: { RnRadios },
  data: () => ({
    options: [
      {
        label: 'one',
        value: '1',
      },
      {
        label: 'two',
        value: '2',
      },
    ],
    value: '1',
    name: 'colour',
  }),
  template:
    '<rn-radios :options="options" :name="name" :value="1" legend="Colour" />',
}))
