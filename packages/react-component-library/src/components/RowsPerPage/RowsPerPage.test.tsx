import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { RowsPerPage, ROWS_PER_PAGE_OPTIONS } from './RowsPerPage'

describe('RowsPerPage', () => {
  it('renders the component', () => {
    render(<RowsPerPage />)

    expect(
      screen.getByRole('combobox', { name: 'Rows per page' })
    ).toHaveValue(ROWS_PER_PAGE_OPTIONS[0].toString())
    expect(screen.queryByLabelText('Clear value')).not.toBeInTheDocument()
  })

  it('renders all the options', async () => {
    render(<RowsPerPage />)

    await userEvent.click(screen.getByTestId('select-arrow-button'))

    const options = screen.getAllByRole('option')

    options.forEach((option, index) => {
      expect(option).toHaveTextContent(ROWS_PER_PAGE_OPTIONS[index].toString())
    })
  })
})
