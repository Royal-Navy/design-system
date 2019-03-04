import { storiesOf } from '@storybook/vue'

import RnAlert from './index.vue'

storiesOf('Alerts', module)
  .add('Default', () => ({
    components: { RnAlert },
    template: '<rn-alert>This is an example alert message </rn-alert>',
  }))
  .add('Default with title', () => ({
    components: { RnAlert },
    template:
      '<rn-alert title="Alert message with title">This is an example alert message</rn-alert>',
  }))
  .add('Success', () => ({
    components: { RnAlert },
    template:
      '<rn-alert title="Success Title" state="success">This is an example alert message</rn-alert>',
  }))
  .add('Info', () => ({
    components: { RnAlert },
    template:
      '<rn-alert title="Info Title" state="info">This is an example alert message</rn-alert>',
  }))
  .add('Danger', () => ({
    components: { RnAlert },
    template:
      '<rn-alert state="danger">This is an example alert message</rn-alert>',
  }))
