import React from 'react'
import { faker } from '@faker-js/faker'
import { StoryFn, Meta } from '@storybook/react'

import { DataGrid } from '.'

export type Order = {
  id: number
  productName: string
  quantity: number
}

const generateRandomData = (length: number): Order[] => {
  const data: Order[] = Array.from({ length }, (_, i) => {
    return {
      id: i + 1,
      productName: faker.commerce.productName(),
      quantity: faker.number.int({ min: 1, max: 100 }),
    }
  })

  return data
}

const data: Order[] = generateRandomData(10)

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
  title: 'Data Grid',
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
