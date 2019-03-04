import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import RnButton from '../RnButton/index.vue'
import RnCardItem from '../RnCardItem/index.vue'
import RnCard from './index.vue'

storiesOf('Cards', module)
  .add('Basic', () => ({
    components: { RnCard, RnButton },
    template: `
      <rn-card style="max-width: 440px" title="Generic Card Content with a long title that wraps multiple rows">
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
        <rn-button class="h_mt-2 h_w-full" @click="ok">Click Here</rn-button>
      </rn-card>`,
    methods: {
      ok() {
        action('ok')
      },
    },
  }))
  .add('Split', () => ({
    components: { RnCard, RnButton, RnCardItem },
    template: `
      <rn-card padding="flush" style="max-width: 440px">
        <rn-cardItem>
          <h4>Card Title</h4>
          <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <rn-button class="h_w-full" @click="ok">Update Item</rn-button>
        </rn-cardItem>
        <rn-cardItem>
          <p>Aenean lacinia bibendum nulla sed. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
          <rn-button type="error" class="h_w-full" @click="ok">Delete Item</rn-button>
        </rn-carditem>
      </rn-card>
    `,
    methods: {
      ok() {
        action('ok')
      },
    },
  }))
