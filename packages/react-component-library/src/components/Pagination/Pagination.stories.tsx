import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Pagination, PaginationProps } from '.'

export default {
  component: Pagination,
  title: 'Pagination',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

export const Default: Story<PaginationProps> = (props) => (
  <Pagination {...props} />
)

Default.args = {
  name: undefined,
  pageSize: 10,
  total: 1000,
}

export const InitialPage: Story<PaginationProps> = (props) => (
  <Pagination {...props} initialPage={5} pageSize={10} total={1000} />
)

InitialPage.storyName = 'Initial page set to 5'
