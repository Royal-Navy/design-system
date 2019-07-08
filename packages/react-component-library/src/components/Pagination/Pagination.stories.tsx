import React from 'react'
import { storiesOf } from '@storybook/react'

import Pagination from './index'

const stories = storiesOf('Pagination', module)

stories.add('Default', () => (
  <Pagination
    onChangeCallback={(...args) => {
      console.log(...args)
    }}
    pageSize={10}
    total={100}
  />
))
