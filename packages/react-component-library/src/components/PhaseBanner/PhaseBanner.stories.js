import React from 'react'
import { storiesOf } from '@storybook/react'

import PhaseBanner from './index'

const stories = storiesOf('PhaseBanner', module)

stories.add('Default', () => <PhaseBanner />)
stories.add('Beta', () => <PhaseBanner phase="beta" />)
stories.add('Custom text', () => (
  <PhaseBanner html="Custom html can go here. <strong>This part is in bold!</strong>" />
))
