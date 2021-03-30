import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Pagination } from '.'

export default { component: Pagination, title: 'Pagination' } as Meta

export const Default = (props: any) => <Pagination {...props} />

Default.args = {
  name: undefined,
  onChange: (currentPage: number, totalPages: number) => console.log,
  pageSize: 10,
  total: 1000,
}

export const InitialPage = () => (
  <Pagination
    initialPage={5}
    onChange={(currentPage: number, totalPages: number) => console.log}
    pageSize={10}
    total={1000}
  />
)

InitialPage.storyName = 'Initial page set to 5'
