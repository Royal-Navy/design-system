import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Pagination } from '.'

export default {
  component: Pagination,
  title: 'Pagination',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof Pagination>

export const Default: ComponentStory<typeof Pagination> = (props) => (
  <Pagination {...props} />
)

Default.args = {
  name: undefined,
  pageSize: 10,
  total: 1000,
}

export const InitialPage: ComponentStory<typeof Pagination> = (props) => (
  <Pagination {...props} initialPage={5} pageSize={10} total={1000} />
)

InitialPage.storyName = 'Initial page set to 5'
