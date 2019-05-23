import React from 'react'
import { storiesOf } from '@storybook/react'

import PhaseBanner from './index'

const stories = storiesOf('PhaseBanner', module)

stories.add('Default', () => <PhaseBanner />)
stories.add('Custom phase tag', () => <PhaseBanner phase="beta" />)
stories.add('Custom link', () => <PhaseBanner link="/my-custom-link" />)
stories.add('Custom text', () => (
  <PhaseBanner>
    Custom html can go here. <strong>This part is in bold!</strong>
  </PhaseBanner>
))
