import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { TablePagination, TablePaginationProps } from './TablePagination'

const renderTablePagination = (props: Partial<TablePaginationProps> = {}) => {
  const onPageChange = jest.fn()
  const onRowsPerPageChange = jest.fn()

  render(
    <TablePagination
      count={134}
      page={0}
      rowsPerPage={50}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
      {...props}
    />
  )

  return { onPageChange, onRowsPerPageChange }
}

describe('TablePagination', () => {
  it('shows the item range for the current page', () => {
    renderTablePagination({ page: 1 })

    expect(screen.getByText('51–100 of 134')).toBeInTheDocument()
  })

  it('clamps the range end to the total on the last page', () => {
    renderTablePagination({ page: 2 })

    expect(screen.getByText('101–134 of 134')).toBeInTheDocument()
  })

  it('shows an empty range when there are no items', () => {
    renderTablePagination({ count: 0 })

    expect(screen.getByText('0–0 of 0')).toBeInTheDocument()
  })

  it('shows the rows per page value', () => {
    renderTablePagination()

    expect(
      screen.getByLabelText('Rows per page', { selector: 'input' })
    ).toHaveValue('50')
  })

  it('disables the previous button on the first page', () => {
    renderTablePagination()

    expect(screen.getByLabelText('Previous page')).toBeDisabled()
    expect(screen.getByLabelText('Next page')).toBeEnabled()
  })

  it('disables the next button on the last page', () => {
    renderTablePagination({ page: 2 })

    expect(screen.getByLabelText('Previous page')).toBeEnabled()
    expect(screen.getByLabelText('Next page')).toBeDisabled()
  })

  it('calls onPageChange with the adjacent page', async () => {
    const { onPageChange } = renderTablePagination({ page: 1 })

    await userEvent.click(screen.getByLabelText('Next page'))
    expect(onPageChange).toHaveBeenLastCalledWith(expect.anything(), 2)

    await userEvent.click(screen.getByLabelText('Previous page'))
    expect(onPageChange).toHaveBeenLastCalledWith(expect.anything(), 0)
  })

  it('hides the first and last buttons by default', () => {
    renderTablePagination()

    expect(screen.queryByLabelText('First page')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Last page')).not.toBeInTheDocument()
  })

  it('jumps to the first and last pages when showFirstLastButtons is set', async () => {
    const { onPageChange } = renderTablePagination({
      page: 1,
      showFirstLastButtons: true,
    })

    await userEvent.click(screen.getByLabelText('Last page'))
    expect(onPageChange).toHaveBeenLastCalledWith(expect.anything(), 2)

    await userEvent.click(screen.getByLabelText('First page'))
    expect(onPageChange).toHaveBeenLastCalledWith(expect.anything(), 0)
  })

  it('calls onRowsPerPageChange with the selected option', async () => {
    const { onRowsPerPageChange } = renderTablePagination()

    await userEvent.click(screen.getByTestId('select-arrow-button'))
    await userEvent.click(screen.getAllByRole('option')[1])

    expect(onRowsPerPageChange).toHaveBeenCalledWith(250)
  })

  it('renders custom rows per page options', async () => {
    renderTablePagination({
      rowsPerPage: 10,
      rowsPerPageOptions: ['10', '25'],
    })

    await userEvent.click(screen.getByTestId('select-arrow-button'))

    expect(
      screen.getAllByRole('option').map((option) => option.textContent)
    ).toEqual(['10', '25'])
  })
})
