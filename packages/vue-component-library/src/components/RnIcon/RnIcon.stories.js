import { storiesOf } from '@storybook/vue'

import RnIcon from './index.vue'

storiesOf('Icon', module)
  .add('Default', () => ({
    components: { RnIcon },
    template: `
      <div>
        <rn-icon name="add"></rn-icon>
        <rn-icon name="apps"></rn-icon>
        <rn-icon name="add"></rn-icon>
        <rn-icon name="add"></rn-icon>
        <rn-icon name="add"></rn-icon>
        <rn-icon name="add"></rn-icon>
      </div>
    `,
  }))
  .add('Small', () => ({
    components: { RnIcon },
    template: `
      <div>
        <rn-icon size="small" name="add"></rn-icon>
        <rn-icon size="small" name="apps"></rn-icon>
        <rn-icon size="small" name="add"></rn-icon>
        <rn-icon size="small" name="add"></rn-icon>
        <rn-icon size="small" name="add"></rn-icon>
        <rn-icon size="small" name="add"></rn-icon>
      </div>
    `,
  }))
  .add('Large', () => ({
    components: { RnIcon },
    template: `
      <div>
        <rn-icon size="large" name="add"></rn-icon>
        <rn-icon size="large" name="apps"></rn-icon>
        <rn-icon size="large" name="add"></rn-icon>
        <rn-icon size="large" name="add"></rn-icon>
        <rn-icon size="large" name="add"></rn-icon>
        <rn-icon size="large" name="add"></rn-icon>
      </div>
    `,
  }))
