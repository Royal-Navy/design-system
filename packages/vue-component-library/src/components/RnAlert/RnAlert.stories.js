import { storiesOf } from '@storybook/vue'

import RnAlert from './index.vue'
import RnButton from '../RnButton/index.vue'

storiesOf('Alerts', module)
  .add('Default', () => ({
    components: { RnAlert, RnButton },
    data() {
      return {
        isOpen: false
      }
    },
    template: `
    <div>
    <rn-button style="position:relative;margin-bottom: 30px;z-index:9999" id="show-alert" state="neutral regular" @click="isOpen = true">Activate Alert</rn-button>
      <rn-alert
        hideClose
        state="neutral"
        actionButtonText="Dismiss"
        :class="{ open: isOpen }"
        @close="isOpen = false"
        @clickAction="isOpen = false"
      >
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
      </rn-alert>
    </div>
    `,
  }))
  .add('Default with close button', () => ({
    components: { RnAlert, RnButton },
    data() {
      return {
        isOpen: false
      }
    },
    template: `
    <div>
    <rn-button style="position:relative;margin-bottom: 30px;z-index:9999" id="show-alert" state="neutral regular" @click="isOpen = true">Activate Alert</rn-button>
      <rn-alert
        state="neutral"
        actionButtonText="Dismiss"
        :class="{ open: isOpen }"
        @close="isOpen = false"
        @clickAction="isOpen = false"
      >
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
      </rn-alert>
    </div>
    `,
  }))
  .add('Default with title', () => ({
    components: { RnAlert, RnButton },
    data() {
      return {
        isOpen: false
      }
    },
    template: `
    <div>
      <rn-button style="position:relative;margin-bottom: 30px;z-index:9999" id="show-alert" state="neutral regular" @click="isOpen = true">Activate Alert</rn-button>
      <rn-alert
        hideClose
        state="neutral"
        title="Generic Card Content with a long title that wraps multiple rows"
        actionButtonText="Dismiss"
        :class="{ open: isOpen }"
        @close="isOpen = false"
        @clickAction="isOpen = false"
      >
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
      </rn-alert>
    </div>
    `,
  }))
  .add('Info', () => ({
    components: { RnAlert, RnButton },
    data() {
      return {
        isOpen: false
      }
    },
    template: `
    <div>
      <rn-button style="position:relative;margin-bottom: 30px;z-index:9999" id="show-alert" state="neutral regular" @click="isOpen = true">Activate Alert</rn-button>
      <rn-alert
        state="primary"
        hideClose
        actionButtonText="Dismiss"
        :class="{ open: isOpen }"
        @close="isOpen = false"
        @clickAction="isOpen = false"
      >
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
      </rn-alert>
    </div>
    `,
  }))
  .add('Success', () => ({
    components: { RnAlert, RnButton },
    data() {
      return {
        isOpen: false
      }
    },
    template: `
    <div>
      <rn-button style="position:relative;margin-bottom: 30px;z-index:9999" id="show-alert" state="neutral regular" @click="isOpen = true">Activate Alert</rn-button>
      <rn-alert
        state="success"
        hideClose
        actionButtonText="Dismiss"
        :class="{ open: isOpen }"
        @close="isOpen = false"
        @clickAction="isOpen = false"
      >
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
      </rn-alert>
    </div>
    `,
  }))
  .add('Warning', () => ({
    components: { RnAlert, RnButton },
    data() {
      return {
        isOpen: false
      }
    },
    template: `
    <div>
      <rn-button style="position:relative;margin-bottom: 30px;z-index:9999" id="show-alert" state="neutral regular" @click="isOpen = true">Activate Alert</rn-button>
      <rn-alert
        state="warning"
        hideClose
        actionButtonText="Dismiss"
        :class="{ open: isOpen }"
        @close="isOpen = false"
        @clickAction="isOpen = false"
      >
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
      </rn-alert>
    </div>
    `,
  }))
  .add('Danger', () => ({
    components: { RnAlert, RnButton },
    data() {
      return {
        isOpen: false
      }
    },
    template: `
    <div>
      <rn-button style="position:relative;margin-bottom: 30px;z-index:9999" id="show-alert" state="neutral regular" @click="isOpen = true">Activate Alert</rn-button>
      <rn-alert
        state="danger"
        hideClose
        actionButtonText="Dismiss"
        :class="{ open: isOpen }"
        @close="isOpen = false"
        @clickAction="isOpen = false"
      >
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
      </rn-alert>
    </div>
    `,
  }))
