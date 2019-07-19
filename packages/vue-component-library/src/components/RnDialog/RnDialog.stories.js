import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import RnDialog from './index.vue'

storiesOf('Dialog', module)
  .add('Basic', () => ({
    components: { RnDialog },
    template: `
      <rn-dialog
        title="Generic Card Content with a long title that wraps multiple rows"
        actionButtonText="I Understand"
        v-on:cancel="cancel"
        v-on:action="ok"
      >
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
      </rn-dialog>`,
    methods: {
      cancel() {
        action('cancel')
      },
      ok() {
        action('ok')
      },
    },
  }))
  .add('Error', () => ({
    components: { RnDialog },
    template: `
      <rn-dialog
        error
        hideCancel
        title="Generic Card Content with a long title that wraps multiple rows"
        v-on:action="ok"
      >
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
      </rn-dialog>`,
    methods: {
      ok() {
        action('ok')
      },
    },
  }))
  .add('Hide action', () => ({
    components: { RnDialog },
    template: `
      <rn-dialog
        error
        hideAction
        title="Generic Card Content with a long title that wraps multiple rows"
        v-on:cancel="cancel"
      >
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
      </rn-dialog>`,
    methods: {
      cancel() {
        action('cancel')
      },
    },
  }))
  .add('No Title', () => ({
    components: { RnDialog },
    template: `
      <rn-dialog
        actionText="I Understand"
        v-on:cancel="cancel"
        v-on:action="ok"
      >
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
      </rn-dialog>`,
    methods: {
      cancel() {
        action('cancel')
      },
      ok() {
        action('ok')
      },
    },
  }))
