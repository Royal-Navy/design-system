import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import DataTable from './index'
import TableHead from './table-head'

const tableData = [
  {
    'Prop Name': 'id',
    Type: 'String',
    Required: 'false',
    Default: '',
    Description: 'ID attribute attached to the wrapper element',
  },
  {
    'Prop Name': 'placeholder',
    Type: 'String',
    Required: 'true',
    Default: '',
    Description: 'A message to show in the input when there is no value',
  },
  {
    'Prop Name': 'type',
    Type: 'String',
    Required: 'false',
    Default: 'text',
    Description: 'The required input attribute',
  },
  {
    'Prop Name': 'onChange',
    Type: 'func(value)',
    Required: 'true',
    Default: 'null',
    Description: 'A callback function to inform of any changes to the value',
  },
]

afterEach(cleanup)

describe('DataTable', () => {
  let datatable

  describe('when the DataTable is generated with caption and data props', () => {
    beforeEach(() => {
      datatable = render(
        <DataTable caption="Example table caption" data={tableData} />
      )
    })

    it('should display the caption', () => {
      expect(datatable.getByTestId('caption')).toHaveTextContent(
        'Example table caption'
      )
    })
  })
})

const headings = ['Foo', 'Bar', 'Qux']

describe('TableHead', () => {
  let tablehead
  let sortByColumn

  describe('when the TableHead is generated with headings and onClickHeading props', () => {
    beforeEach(() => {
      sortByColumn = jest.fn()

      tablehead = render(
        <table>
          <TableHead headings={headings} onClickHeading={sortByColumn} />
        </table>
      )
    })

    it('should render headings', () => {
      expect(tablehead.queryByText('Foo')).not.toBeNull()
    })

    describe('when the user clicks to sort by a column', () => {
      beforeEach(() => {
        fireEvent(
          tablehead.getByTestId('sort-Foo'),
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('should invoke the sortByColumn callback', () => {
        expect(sortByColumn).toBeCalled()
      })
    })
  })
})
