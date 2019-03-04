import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import RnBadge from '../RnBadge/index.vue'
import RnButton from './index.vue'

storiesOf('Buttons', module)
  .add('Default', () => ({
    components: { RnButton },
    template: '<rn-button @click="ok">Default Button</rn-button>',
    methods: {
      ok() {
        action('ok')
      },
    },
  }))
  .add('Secondary', () => ({
    components: { RnButton },
    template:
      '<rn-button state="secondary" @click="ok">Secondary Button</rn-button>',
    methods: {
      ok() {
        action('ok')
      },
    },
  }))
  .add('Success', () => ({
    components: { RnButton },
    template:
      '<rn-button state="success" @click="ok">Success Button</rn-button>',
    methods: {
      ok() {
        action('ok')
      },
    },
  }))
  .add('Danger', () => ({
    components: { RnButton },
    template: '<rn-button state="danger" @click="ok">Danger Button</rn-button>',
    methods: {
      ok() {
        action('ok')
      },
    },
  }))
  .add('Link', () => ({
    components: { RnButton },
    template: '<rn-button state="link" @click="ok">Link Button</rn-button>',
    methods: {
      ok() {
        action('ok')
      },
    },
  }))
  .add('with icon', () => ({
    components: { RnButton },
    template: `
    <rn-button class="icon icon--warning" @click="ok" icon="add">
      Ooh look! An Icon
    </rn-button>`,
    methods: {
      ok() {
        action('ok')
      },
    },
  }))
  .add('disabled', () => ({
    components: { RnButton },
    template:
      "<rn-button disabled @click=\"ok\">Y'all aint' clickin' me</rn-button>",
    methods: {
      ok() {
        action('ok')
      },
    },
  }))
  .add('Large', () => ({
    components: { RnBadge },
    template:
      '<rn-badge state="inverse" type="pill" size="large" @click="ok">Pill</rn-badge>',
    methods: {
      ok() {
        action('ok')
      },
    },
  }))
