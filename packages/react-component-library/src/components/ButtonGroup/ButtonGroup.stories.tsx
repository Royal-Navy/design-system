import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import { ButtonGroup } from '../index'

const stories = storiesOf('Button group', module)

stories.addDecorator(withKnobs)

stories.add('Default', () => (
  <>
    <ButtonGroup
      items={[
        {
          value: 1,
          label: 'One',
        },
        {
          value: 2,
          label: 'Two',
        },
        {
          disabled: true,
          value: 3,
          label: 'Three',
        },
      ]}
      name="sizer"
      onClick={action('Click button group')}
      size="regular"
    />
  </>
))
