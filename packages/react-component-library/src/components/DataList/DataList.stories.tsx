import { storiesOf } from '@storybook/react'
import React from 'react'

import { DataList } from './index'

const stories = storiesOf('DataList', module)

stories.add('Default', () => {
  return <DataList />
})
