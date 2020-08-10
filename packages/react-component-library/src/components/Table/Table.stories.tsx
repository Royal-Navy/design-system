import React from 'react'
import { storiesOf } from '@storybook/react'

import { Badge, BADGE_COLOR } from '../Badge'
import { Table, TableColumn } from '.'

const stories = storiesOf('Table', module)
const examples = storiesOf('Table/Examples', module)

stories.add('Default', () => {
  const tableDataMock = [
    {
      id: 'a',
      first: 'Row 1 cell 1',
      second: 'Row 1 cell 2',
      third: 'Row 1 cell 3',
      fourth: 'Row 1 cell 4',
      fifth: 'Row 1 cell 5',
      sixth: 'Row 1 cell 6',
      seventh: 'Row 1 cell 7',
      eighth: 'Row 1 cell 8',
      ninth: 'Row 1 cell 9',
      tenth: 'Row 1 cell 10',
    },
    {
      id: 'b',
      first: 'Row 2 cell 1',
      second: 'Row 2 cell 2',
      third: 'Row 2 cell 3',
      fourth: 'Row 2 cell 4',
      fifth: 'Row 2 cell 5',
      sixth: 'Row 2 cell 6',
      seventh: 'Row 2 cell 7',
      eighth: 'Row 2 cell 8',
      ninth: 'Row 2 cell 9',
      tenth: 'Row 2 cell 10',
    },
  ]

  return (
    <Table data={tableDataMock}>
      <TableColumn field="first">First column</TableColumn>
      <TableColumn field="second">Second column</TableColumn>
      <TableColumn field="third">Third column</TableColumn>
      <TableColumn field="fourth">Fourth column</TableColumn>
      <TableColumn field="fifth">Fifth column</TableColumn>
      <TableColumn field="sixth">Sixth column</TableColumn>
      <TableColumn field="seventh">Seventh column</TableColumn>
      <TableColumn field="eighth">Eighth column</TableColumn>
      <TableColumn field="ninth">Ninth column</TableColumn>
      <TableColumn field="tenth">Tenth column</TableColumn>
    </Table>
  )
})

examples.add('Arbitrary cell content', () => {
  const tableDataMock = [
    {
      id: 'a',
      first: 'Row 1 cell 1',
      second: <Badge color={BADGE_COLOR.SUCCESS}>Online</Badge>,
    },
    {
      id: 'b',
      first: 'Row 2 cell 1',
      second: <Badge color={BADGE_COLOR.DANGER}>Offline</Badge>,
    },
  ]

  return (
    <Table data={tableDataMock}>
      <TableColumn field="first">First column</TableColumn>
      <TableColumn field="second">Status</TableColumn>
    </Table>
  )
})

examples.add('Sortable', () => {
  const tableDataMock = [
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
    <Table data={tableDataMock}>
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
})

examples.add('With caption', () => {
  const tableDataMock = [
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
    <Table data={tableDataMock} caption="Example caption">
      <TableColumn field="first">First column</TableColumn>
      <TableColumn field="second">Second column</TableColumn>
      <TableColumn field="third">Third column</TableColumn>
    </Table>
  )
})
