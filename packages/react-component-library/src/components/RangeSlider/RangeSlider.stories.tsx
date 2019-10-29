import React from 'react'
import { storiesOf } from '@storybook/react'

import { RangeSlider } from './index'

const stories = storiesOf('RangeSlider', module)

stories.add('Single handle', () => (
  <RangeSlider
    domain={[0, 100]}
    step={1}
    mode={2}
    values={[10, 20] /* two values = two handles */}
  />
))
