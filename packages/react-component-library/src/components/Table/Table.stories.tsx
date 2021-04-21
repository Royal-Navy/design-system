import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Badge, BADGE_COLOR_VARIANT, BADGE_COLOR } from '../Badge'
import { Table, TableProps, TableColumn } from '.'

export default {
  component: Table,
  subcomponents: { TableColumn },
  title: 'Table',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

const tableData = [
  {
    id: 'a',
    first: 'Row 1 cell 1',
    second: 'Row 1 cell 2',
    third: 'Row 1 cell 3',
    fourth: 'Row 1 cell 4',
    fifth: 'Row 1 cell 5',
  },
  {
    id: 'b',
    first: 'Row 2 cell 1',
    second: 'Row 2 cell 2',
    third: 'Row 2 cell 3',
    fourth: 'Row 2 cell 4',
    fifth: 'Row 2 cell 5',
  },
]

export const Default: Story<TableProps> = (props) => {
  return (
    <Table {...props}>
      <TableColumn field="first">First column</TableColumn>
      <TableColumn field="second">Second column</TableColumn>
      <TableColumn field="third">Third column</TableColumn>
      <TableColumn field="fourth">Fourth column</TableColumn>
      <TableColumn field="fifth">Fifth column</TableColumn>
    </Table>
  )
}

Default.args = {
  data: tableData,
}

export const ArbitraryCellContent: Story<TableProps> = (props) => {
  const tableDataArbitraryCellContent = [
    {
      id: 'a',
      first: 'Row 1 cell 1',
      second: (
        <Badge
          colorVariant={BADGE_COLOR_VARIANT.FADED}
          color={BADGE_COLOR.SUCCESS}
        >
          Online
        </Badge>
      ),
    },
    {
      id: 'b',
      first: 'Row 2 cell 1',
      second: (
        <Badge
          colorVariant={BADGE_COLOR_VARIANT.FADED}
          color={BADGE_COLOR.DANGER}
        >
          Offline
        </Badge>
      ),
    },
  ]

  return (
    <Table {...props} data={tableDataArbitraryCellContent}>
      <TableColumn field="first">First column</TableColumn>
      <TableColumn field="second">Status</TableColumn>
    </Table>
  )
}

ArbitraryCellContent.storyName = 'Arbitrary cell content'

export const Sortable: Story<TableProps> = (props) => {
  const tableDataSortable = [
    {
      id: 'a',
      first: 'Row 1 cell 1',
      second: 'Row 1 cell 2',
      third: 'Row 1 cell 3',
    },
    {
      id: 'b',
      first: 'Row 2 cell 1',
      second: 'Row 2 cell 2',
      third: 'Row 2 cell 3',
    },
    {
      id: 'c',
      first: 'Row 3 cell 1',
      second: 'Row 3 cell 2',
      third: 'Row 3 cell 3',
    },
  ]

  return (
    <Table {...props} data={tableDataSortable}>
      <TableColumn field="first" isSortable>
        First column
      </TableColumn>
      <TableColumn field="second" isSortable>
        Second column
      </TableColumn>
      <TableColumn field="third" isSortable>
        Third column
      </TableColumn>
    </Table>
  )
}

Sortable.storyName = 'Sortable'

export const WithCaption: Story<TableProps> = (props) => {
  const tableDataWithCaption = [
    {
      id: 'a',
      first: 'Row 1 cell 1',
      second: 'Row 1 cell 2',
      third: 'Row 1 cell 3',
    },
    {
      id: 'b',
      first: 'Row 2 cell 1',
      second: 'Row 2 cell 2',
      third: 'Row 2 cell 3',
    },
  ]

  return (
    <Table {...props} data={tableDataWithCaption} caption="Example caption">
      <TableColumn field="first">First column</TableColumn>
      <TableColumn field="second">Second column</TableColumn>
      <TableColumn field="third">Third column</TableColumn>
    </Table>
  )
}

WithCaption.storyName = 'With caption'
