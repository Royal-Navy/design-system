import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { DataGrid } from '.'

export type Order = {
  id: number
  productName: string
  quantity: number
}

const data: Order[] = [
  {
    id: 1,
    productName: 'Book',
    quantity: 10,
  },
  {
    id: 2,
    productName: 'Pen',
    quantity: 10,
  },
]

const columns = [
  {
    header: 'Product Name',
    accessorKey: 'productName',
  },
  {
    header: 'Qty',
    accessorKey: 'quantity',
  },
]

export default {
  component: DataGrid,
  subcomponents: {},
  title: 'DataGrid',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as Meta<typeof DataGrid>

export const Default: StoryFn<typeof DataGrid> = (props) => {
  return <DataGrid {...props} />
}

Default.args = {
  columns,
  data,
}
