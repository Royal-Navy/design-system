import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import Pagination from './index'

const stories = storiesOf('Pagination', module)

stories.add('Default', () => (
  <Pagination
    onChangeCallback={action('onChangeCallback')}
    pageSize={10}
    total={1000}
  />
))
