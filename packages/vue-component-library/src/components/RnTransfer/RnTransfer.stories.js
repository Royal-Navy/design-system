import { storiesOf } from '@storybook/vue'

import RnTransfer from './index.vue'

storiesOf('Transfer', module)
  .add('Basic', () => ({
    components: { RnTransfer },
    data() {
      return {
        listData: [
          {
            "id": "stfaith",
            "location": 'St Faith', 
            "list" : 'left',
            "checked" : false,
          },
          {
            "id": "portsmouth",
            "location": 'Portsmouth', 
            "list" : 'right',
            "checked" : false,
          },
          {
            "id": "gosport",
            "location": 'Gosport', 
            "list" : 'left',
            "checked" : false,
          },
          {
            "id": "southampton",
            "location": 'Southampton', 
            "list" : 'left',
            "checked" : false,
          },
        ]
      }
    },
    template: `
      <rn-transfer :listData="listData" style="max-width: 600px;"></rn-transfer>
    `,
  }))
  .add('With Headers', () => ({
    components: { RnTransfer },
    data() {
      return {
        listData: [
          {
            "id": "stfaith",
            "location": 'St Faith', 
            "list" : 'left',
            "checked" : false,
          },
          {
            "id": "portsmouth",
            "location": 'Portsmouth', 
            "list" : 'right',
            "checked" : false,
          },
          {
            "id": "gosport",
            "location": 'Gosport', 
            "list" : 'left',
            "checked" : false,
          },
          {
            "id": "southampton",
            "location": 'Southampton', 
            "list" : 'left',
            "checked" : false,
          },
        ]
      }
    },
    template: `
      <rn-transfer :listData="listData" leftHeader="Left header" rightHeader="Right header" style="max-width: 600px;"></rn-transfer>
    `,
  }))
