import { storiesOf } from '@storybook/vue'

import RnToggle from './index.vue'

const stories = storiesOf('Toggle', module)

stories.add('Default', () => ({
  components: { RnToggle },

  data() {
    return {
      happy: true,
    }
  },

  template: `<rn-toggle label="Happy" v-model="happy"/>`,
}))

stories.add('Disabled', () => ({
  components: { RnToggle },

  data() {
    return {
      happy: true,
    }
  },

  template: `<rn-toggle label="Happy" v-model="happy" disabled/>`,
}))

stories.add('Interaction', () => ({
  components: { RnToggle },
  methods: {
    changed(newValue) {
      this.happy = newValue
      this.message = `Toggled`
    },
  },
  data() {
    return {
      happy: false,
      message: '',
    }
  },

  template: `
    <div>
      <rn-toggle
        label="Toggle me"
        :value="happy"
        v-on:change="changed"
      />

      <hr>
      <p>{{message}}</p>
    </div>
  `,
}))
