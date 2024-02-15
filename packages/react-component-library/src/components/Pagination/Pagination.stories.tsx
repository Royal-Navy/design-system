import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Pagination } from '.'

export default {
  component: Pagination,
  title: 'Pagination',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<typeof Pagination>

export const Default: StoryFn<typeof Pagination> = (props) => (
  <Pagination {...props} />
)

Default.args = {
  name: undefined,
  pageSize: 10,
  total: 1000,
}

export const InitialPage: StoryFn<typeof Pagination> = (props) => (
  <Pagination {...props} initialPage={5} pageSize={10} total={1000} />
)

InitialPage.storyName = 'Initial page set to 5'
