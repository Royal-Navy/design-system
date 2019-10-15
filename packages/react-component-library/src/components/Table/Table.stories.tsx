import React from 'react'
import { storiesOf } from '@storybook/react'

import { Table, Column } from './index'

const stories = storiesOf('Table', module)

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
      <Column field="first">First column</Column>
      <Column field="second">Second column</Column>
      <Column field="third">Third column</Column>
      <Column field="fourth">Fourth column</Column>
      <Column field="fifth">Fifth column</Column>
      <Column field="sixth">Sixth column</Column>
      <Column field="seventh">Seventh column</Column>
      <Column field="eighth">Eighth column</Column>
      <Column field="ninth">Ninth column</Column>
      <Column field="tenth">Tenth column</Column>
    </Table>
  )
})
