import React from 'react'
import { storiesOf } from '@storybook/react'

import { ProgressIndicator } from './index'

const stories = storiesOf('ProgressIndicator', module)

stories.add('Default', () => <ProgressIndicator />)
