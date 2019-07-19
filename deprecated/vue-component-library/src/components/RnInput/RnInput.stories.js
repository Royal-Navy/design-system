import { storiesOf } from '@storybook/vue'
import RnInput from './index.vue'

storiesOf('Inputs', module)
  .add('Text', () => ({
    components: { RnInput },
    data: () => ({
      user: 'Fred',
    }),
    template:
      '<rn-input type="text" label="User Name" name="user" v-model="user" />',
  }))
  .add('Number', () => ({
    components: { RnInput },
    data: () => ({
      users: '10',
    }),
    template:
      '<rn-input type="number" label="Users" name="user" v-model="users"/>',
  }))
  .add('Textarea', () => ({
    components: { RnInput },
    data: () => ({
      description: '',
    }),
    template:
      '<rn-input type="textarea" label="Description" v-model="description" />',
  }))
