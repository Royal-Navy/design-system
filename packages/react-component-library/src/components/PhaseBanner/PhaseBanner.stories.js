import React from 'react'
import { storiesOf } from '@storybook/react'

import PhaseBanner from './index'

const stories = storiesOf('PhaseBanner', module)

stories.add('Default', () => <PhaseBanner />)
