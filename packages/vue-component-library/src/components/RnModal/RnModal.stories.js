import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import RnModal from './index.vue'
import RnButton from '../RnButton/index.vue'

storiesOf('Modals', module)
  .add('Basic', () => ({
    components: { RnModal, RnButton },
    data() {
      return {
        isOpen: false
      }
    },
    template: `
    <div>
      <rn-button style="position:relative;z-index:9999" id="show-modal" state="neutral regular" @click="isOpen = true">Activate Modal</rn-button>
      <rn-modal
        title="Generic Card Content with a long title that wraps multiple rows"
        actionButtonText="I Understand"
        :class="{ open: isOpen }"
        @close="isOpen = false"
        @clickAction="isOpen = false"
      >
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
      </rn-modal>
    </div>
    `,
  }))
  .add('Hide action', () => ({
    components: { RnModal, RnButton },
    data() {
      return {
        isOpen: false
      }
    },
    template: `
    <div>
      <rn-button style="position:relative;z-index:9999" id="show-modal" state="neutral regular" @click="isOpen = true">Activate Modal</rn-button>
      <rn-modal
        error
        hideAction
        title="Generic Card Content with a long title that wraps multiple rows"
        :class="{ open: isOpen }"
        @close="isOpen = false"
      >
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
      </rn-modal>
    </div>
      `,
  }))
  .add('Hide cancel', () => ({
    components: { RnModal, RnButton },
    data() {
      return {
        isOpen: false
      }
    },
    template: `
    <div>
      <rn-button style="position:relative;z-index:9999" id="show-modal" state="neutral regular" @click="isOpen = true">Activate Modal</rn-button>
      <rn-modal
        error
        hideCancel
        title="Generic Card Content with a long title that wraps multiple rows"
        :class="{ open: isOpen }"
        @clickAction="isOpen = false"
      >
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
      </rn-modal>
    </div>
      `,
  }))
  .add('No Title', () => ({
    components: { RnModal, RnButton },
    data() {
      return {
        isOpen: false
      }
    },
    template: `
    <div>
      <rn-button style="position:relative;z-index:9999" id="show-modal" state="neutral regular" @click="isOpen = true">Activate Modal</rn-button>
      <rn-modal
        actionButtonText="OK"
        :class="{ open: isOpen }"
        @close="isOpen = false"
        @clickAction="isOpen = false"
      >
        <p>Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</p>
      </rn-modal>
    </div>
    `,
  }))
