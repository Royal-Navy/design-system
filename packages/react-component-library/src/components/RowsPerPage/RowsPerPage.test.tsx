import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { RowsPerPage, ROWS_PER_PAGE_OPTIONS } from './RowsPerPage'

describe('RowsPerPage', () => {
  it('renders the component', () => {
    render(<RowsPerPage />)

    expect(
      screen.getByLabelText('Rows per page', { selector: 'input' })
    ).toHaveValue(ROWS_PER_PAGE_OPTIONS[0])
    expect(screen.queryByLabelText('Clear value')).not.toBeInTheDocument()
  })

  it('renders all the options', async () => {
    render(<RowsPerPage />)

    await userEvent.click(screen.getByTestId('select-arrow-button'))

    const options = screen.getAllByRole('option')

    options.forEach((option, index) => {
      expect(option).toHaveTextContent(ROWS_PER_PAGE_OPTIONS[index])
    })
  })

  describe('with showItemRange', () => {
    it('does not show item range text when showItemRange is false', () => {
      render(
        <RowsPerPage showItemRange={false} currentPage={1} totalItems={134} />
      )

      expect(screen.queryByText(/Showing/)).not.toBeInTheDocument()
    })

    it('shows item range text when showItemRange is true', () => {
      render(<RowsPerPage showItemRange currentPage={1} totalItems={134} />)

      expect(screen.getByText(/Showing/)).toBeInTheDocument()
      expect(screen.getByText('1')).toBeInTheDocument()
      expect(screen.getByText('50')).toBeInTheDocument()
      expect(screen.getByText('134')).toBeInTheDocument()
    })

    it('calculates correct range for different pages', () => {
      render(
        <RowsPerPage
          showItemRange
          currentPage={2}
          totalItems={134}
          value="25"
        />
      )

      expect(screen.getByText(/Showing/)).toBeInTheDocument()
      expect(screen.getByText('26')).toBeInTheDocument()
      expect(screen.getByText('50')).toBeInTheDocument()
      expect(screen.getByText('134')).toBeInTheDocument()
    })

    it('calculates correct range for last page with partial results', () => {
      render(
        <RowsPerPage
          showItemRange
          currentPage={3}
          totalItems={134}
          value="50"
        />
      )

      expect(screen.getByText(/Showing/)).toBeInTheDocument()
      expect(screen.getByText('101')).toBeInTheDocument()
      expect(screen.getAllByText('134')).toHaveLength(2) // appears twice: in range and total
    })

    it('shows 0 to 0 of 0 when there are no items', () => {
      render(<RowsPerPage showItemRange currentPage={1} totalItems={0} />)

      expect(screen.getByText(/Showing/)).toBeInTheDocument()
      expect(screen.getAllByText('0')).toHaveLength(3) // appears three times
    })

    it('uses initialValue when value is not provided', () => {
      render(
        <RowsPerPage
          showItemRange
          currentPage={1}
          totalItems={134}
          initialValue="25"
        />
      )

      expect(screen.getByText(/Showing/)).toBeInTheDocument()
      expect(screen.getByText('1')).toBeInTheDocument()
      expect(screen.getByText('25')).toBeInTheDocument()
      expect(screen.getByText('134')).toBeInTheDocument()
    })

    it('updates range when value changes', () => {
      const { rerender } = render(
        <RowsPerPage
          showItemRange
          currentPage={1}
          totalItems={134}
          value="10"
        />
      )

      expect(screen.getByText(/Showing/)).toBeInTheDocument()
      expect(screen.getByText('1')).toBeInTheDocument()
      expect(screen.getByText('10')).toBeInTheDocument()
      expect(screen.getByText('134')).toBeInTheDocument()

      rerender(
        <RowsPerPage
          showItemRange
          currentPage={1}
          totalItems={134}
          value="50"
        />
      )

      expect(screen.getByText(/Showing/)).toBeInTheDocument()
      expect(screen.getByText('1')).toBeInTheDocument()
      expect(screen.getByText('50')).toBeInTheDocument()
      expect(screen.getByText('134')).toBeInTheDocument()
    })

    it('maintains select functionality with item range shown', async () => {
      const onChange = jest.fn()
      render(
        <RowsPerPage
          showItemRange
          currentPage={1}
          totalItems={134}
          value="10"
          onChange={onChange}
        />
      )

      await userEvent.click(screen.getByTestId('select-arrow-button'))
      await userEvent.click(screen.getByRole('option', { name: '250' }))

      expect(onChange).toHaveBeenCalledWith('250')
    })
  })
})
