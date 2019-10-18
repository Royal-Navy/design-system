import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Column, Table } from './index'

describe('Table', () => {
  let wrapper: RenderResult

  describe('default props', () => {
    beforeEach(() => {
      const tableDataMock = [
        {
          id: 'a',
          first: 'a1',
          second: 'a2',
          third: 'a3',
        },
        {
          id: 'b',
          first: 'b1',
          second: 'b2',
          third: 'b3',
        },
        {
          id: 'c',
          first: 'c1',
          second: 'c2',
          third: 'c3',
        },
      ]

      wrapper = render(
        <Table data={tableDataMock}>
          <Column field="first">First</Column>
          <Column field="second">Second</Column>
          <Column field="third">Third</Column>
        </Table>
      )
    })

    it('should style the table wrapper', () => {
      const tableWrapper = wrapper.container.firstElementChild
      expect(tableWrapper.classList).toContain('rn-table__wrapper')
    })

    it('should style the table', () => {
      const table = wrapper.container.firstElementChild.firstElementChild
      expect(table.classList).toContain('rn-table')
    })

    it('should render three table header cells', () => {
      const headerCells = wrapper.getByText('First').parentElement.children
      expect(headerCells).toHaveLength(3)
    })

    it('should render TH for header cells', () => {
      const firstHeaderCell = wrapper.getByText('First')
      expect(firstHeaderCell.tagName).toEqual('TH')
    })

    it('should render three rows', () => {
      const rows = wrapper.getByText('a1').parentElement.parentElement.children
      expect(rows).toHaveLength(3)
    })

    it('should render TD for data cells', () => {
      const firstDataCell = wrapper.getByText('a1')
      expect(firstDataCell.tagName).toEqual('TD')
    })
  })
})
