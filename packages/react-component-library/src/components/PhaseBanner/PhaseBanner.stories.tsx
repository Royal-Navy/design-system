import React from 'react'
import { storiesOf } from '@storybook/react'

import { PhaseBanner } from '.'

const stories = storiesOf('Phase banner', module)
const examples = storiesOf('Phase banner/Examples', module)

stories.add('Default', () => <PhaseBanner />)

examples.add('Beta', () => <PhaseBanner phase="beta" />)

examples.add('Custom link', () => <PhaseBanner link="#" />)

examples.add('Custom text', () => (
  <PhaseBanner>
    Custom html can go here. <strong>This part is in bold!</strong>
  </PhaseBanner>
))

examples.add('Full width', () => <PhaseBanner isFullWidth />)
