import { storiesOf } from '@storybook/vue'

import RnProgress from './index.vue'

storiesOf('Progress Bars', module)
  .add('default', () => ({
    components: { RnProgress },
    template: '<rn-progress value=25></rn-progress>',
  }))
  .add('small', () => ({
    components: { RnProgress },
    template: '<rn-progress value="50" size="small"></rn-progress>',
  }))
  .add('large', () => ({
    components: { RnProgress },
    template: '<rn-progress value="75" size="large"></rn-progress>',
  }))
