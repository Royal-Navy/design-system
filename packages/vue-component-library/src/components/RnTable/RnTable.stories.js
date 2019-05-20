import { storiesOf } from '@storybook/vue'

import RnTable from './index.vue'

storiesOf('Tables', module)
  .add('manual', () => ({
    components: { RnTable },
    template: `
      <rn-table>
        <tbody>
          <tr>
            <td>Item 1</td>
            <td>Item 2</td>
            <td>Item 3</td>
          </tr>
          <tr>
            <td>Item 4</td>
            <td>Item 5</td>
            <td>Item 6</td>
          </tr>
        </tbody>
      </rn-table>`,
  }))
  .add('dynamic', () => ({
    components: { RnTable },
    data() {
      return {
        tableData: [
          ['St Faith', 2001, 'Isle of Wight', 'Portsmouth', 500],
          ['St Cecilia', 2003, 'Portsmouth', 'Southampton', 340],
          ['St Clare', 1993, 'Portsmouth', 'Isle of Wight', 225],
          ['Wight Sun', 2008, 'Gosport', 'Portsmouth', 65],
        ],
      }
    },
    template: '<rn-table :tableData="tableData"/>',
  }))
  .add('dynamic with header', () => ({
    components: { RnTable },
    data() {
      return {
        headings: ['Ferry Name', 'In Service', 'From', 'To', 'Capacity'],
        tableData: [
          ['St Faith', 2001, 'Isle of Wight', 'Portsmouth', 500],
          ['St Cecilia', 2003, 'Portsmouth', 'Southampton', 340],
          ['St Clare', 1993, 'Portsmouth', 'Isle of Wight', 225],
          ['Wight Sun', 2008, 'Gosport', 'Portsmouth', 65],
        ],
      }
    },
    template: '<rn-table :headings="headings" :tableData="tableData"/>',
  }))
  .add('dynamic with caption', () => ({
    components: { RnTable },
    data() {
      return {
        caption: 'Whoever heard of a snozzberry?',
        tableData: [
          ['St Faith', 2001, 'Isle of Wight', 'Portsmouth', 500],
          ['St Cecilia', 2003, 'Portsmouth', 'Southampton', 340],
          ['St Clare', 1993, 'Portsmouth', 'Isle of Wight', 225],
          ['Wight Sun', 2008, 'Gosport', 'Portsmouth', 65],
        ],
      }
    },
    template: '<rn-table :caption="caption" :tableData="tableData"/>',
  }))
  .add('dynamic sortable', () => ({
    components: { RnTable },
    data() {
      return {
        headings: ['Ferry Name', 'In Service', 'From', 'To', 'Capacity'],
        tableData: [
          ['St Faith', 2001, 'Isle of Wight', 'Portsmouth', 500],
          ['St Cecilia', 2003, 'Portsmouth', 'Southampton', 340],
          ['St Clare', 1993, 'Portsmouth', 'Isle of Wight', 225],
          ['Wight Sun', 2008, 'Gosport', 'Portsmouth', 65],
        ],
      }
    },
    template: '<rn-table :sortable="true" :headings="headings" :tableData="tableData"/>',
  }))
