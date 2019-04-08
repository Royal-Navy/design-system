import { storiesOf } from '@storybook/vue'

import RnTransfer from './index.vue'

storiesOf('Transfer', module)
  .add('Basic', () => ({
    components: { RnTransfer },
    data() {
      return {
        listData: [
          {
            "location": 'St Faith', 
            "list" : 0,
          },
          {
            "location": 'Portsmouth', 
            "list" : 1,
          },
          {
            "location": 'Gosport', 
            "list" : 0,
          },
          {
            "location": 'Southampton', 
            "list" : 0,
          },
        ]
      }
    },
    template: `
      <rn-transfer :listData="listData" leftHeader="Left header" rightHeader="Right header" style="max-width: 600px;"></rn-transfer>
    `,
  }))
