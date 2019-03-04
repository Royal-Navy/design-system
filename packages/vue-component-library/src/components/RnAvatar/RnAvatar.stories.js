import { storiesOf } from '@storybook/vue'

import RnAvatar from './index.vue'

storiesOf('Avatars', module)
  .add('Default', () => ({
    components: { RnAvatar },
    template: '<rn-avatar initials="RN" />',
  }))
  .add('Small', () => ({
    components: { RnAvatar },
    template: '<rn-avatar size="small" initials="RN" />',
  }))
  .add('Large', () => ({
    components: { RnAvatar },
    template: '<rn-avatar size="large" initials="RN" />',
  }))
