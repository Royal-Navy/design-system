import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Pagination } from '.'

const stories = storiesOf('Pagination', module)

stories.add('Default', () => (
  <Pagination onChange={action('onChange')} pageSize={10} total={1000} />
))

stories.add('Initial page 5', () => (
  <Pagination
    initialPage={5}
    onChange={action('onChange')}
    pageSize={10}
    total={1000}
  />
))
