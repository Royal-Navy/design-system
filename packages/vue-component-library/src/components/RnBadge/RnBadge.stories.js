import { storiesOf } from '@storybook/vue'

import RnBadge from './index.vue'

storiesOf('Badges', module)
  .add('Default', () => ({
    components: { RnBadge },
    template: '<rn-badge>Badge</rn-badge>',
  }))
  .add('Inverse', () => ({
    components: { RnBadge },
    template: '<rn-badge state="inverse">Badge</rn-badge>',
  }))
  .add('Success', () => ({
    components: { RnBadge },
    template: '<rn-badge state="success">Success</rn-badge>',
  }))
  .add('Error', () => ({
    components: { RnBadge },
    template: '<rn-badge state="error">Error</rn-badge>',
  }))
  .add('Pill', () => ({
    components: { RnBadge },
    template: '<rn-badge state="inverse" type="pill">Pill</rn-badge>',
  }))
  .add('Small', () => ({
    components: { RnBadge },
    template:
      '<rn-badge state="inverse" type="pill" size="small">Pill</rn-badge>',
  }))
