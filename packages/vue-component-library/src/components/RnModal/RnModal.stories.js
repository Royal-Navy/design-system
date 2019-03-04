import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import RnModal from './index.vue'

storiesOf('Modals', module)
  .add('Basic', () => ({
    components: { RnModal },
    template: `
      <rn-modal
        title="Generic Card Content with a long title that wraps multiple rows"
        actionButtonText="I Understand"
        v-on:cancel="cancel"
        v-on:action="ok"
      >
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
      </rn-modal>`,
    methods: {
      cancel() {
        action('cancel')
      },
      ok() {
        action('ok')
      },
    },
  }))
  .add('Hide action', () => ({
    components: { RnModal },
    template: `
      <rn-modal
        error
        hideAction
        title="Generic Card Content with a long title that wraps multiple rows"
        v-on:cancel="cancel"
      >
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
      </rn-modal>`,
    methods: {
      cancel() {
        action('cancel')
      },
    },
  }))
  .add('Hide cancel', () => ({
    components: { RnModal },
    template: `
      <rn-modal
        error
        hideCancel
        title="Generic Card Content with a long title that wraps multiple rows"
        v-on:cancel="cancel"
      >
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
      </rn-modal>`,
    methods: {
      cancel() {
        action('cancel')
      },
    },
  }))
  .add('No Title', () => ({
    components: { RnModal },
    template: `
      <rn-modal
        actionText="I Understand"
        v-on:cancel="cancel"
        v-on:action="ok"
      >
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
      </rn-modal>`,
    methods: {
      cancel() {
        action('cancel')
      },
      ok() {
        action('ok')
      },
    },
  }))
