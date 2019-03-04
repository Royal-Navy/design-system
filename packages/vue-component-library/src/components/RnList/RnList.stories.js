import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import RnBadge from '../RnBadge/index.vue'
import RnCard from '../RnCard/index.vue'
import RnListItem from '../RnListItem/index.vue'
import RnList from './index.vue'

storiesOf('Lists', module)
  .add('Single', () => ({
    components: { RnList, RnListItem, RnBadge },
    template: `
      <rn-list style="width: 400px">
        <rn-list-item><span>List Item 1</span><rn-badge type="pill">Badge</rn-badge></rn-list-item>
        <rn-list-item>List Item 1</rn-list-item>
        <rn-list-item>List Item 1</rn-list-item>
        <rn-list-item>List Item 1</rn-list-item>
      </rn-list>
    `,
    methods: { close: action('RnModal closed') },
  }))
  .add('Card', () => ({
    components: { RnList, RnListItem, RnCard },
    template: `
      <rn-list style="width: 400px">
        <rn-list-item type="card" title="List Item Title">
          <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor.</p>
        </rn-list-item>
        <rn-list-item type="card" title="List Item Title">
          <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor.</p>
        </rn-list-item>
        <rn-list-item type="card" title="List Item Title" class="active">
          <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor.</p>
        </rn-list-item>
        <rn-list-item type="card" title="List Item Title">
          <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor.</p>
        </rn-list-item>
      </rn-list>
    `,
    methods: { close: action('RnModal closed') },
  }))
