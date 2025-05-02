import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { RowsPerPage, ROWS_PER_PAGE_OPTIONS } from './RowsPerPage'

describe('RowsPerPage', () => {
  it('renders the component', () => {
    render(<RowsPerPage />)

    expect(screen.getByRole('combobox', { name: 'Rows per page' })).toHaveValue(
      ROWS_PER_PAGE_OPTIONS[0].toString()
    )

    expect(screen.getByLabelText('Rows per page')).toBeInTheDocument()
  })

  it('sets focus to the select on label click', async () => {
    render(<RowsPerPage />)
    const label = screen.getByLabelText('Rows per page')
    await userEvent.click(label)

    const select = screen.getByRole('combobox', { name: 'Rows per page' })
    expect(select).toHaveFocus()
  })

  it('renders all the options', async () => {
    render(<RowsPerPage />)

    const select = screen.getByRole('combobox', { name: 'Rows per page' })
    await userEvent.click(select)

    const options = screen.getAllByRole('option')
    expect(options.length).toBe(ROWS_PER_PAGE_OPTIONS.length)

    options.forEach((option, index) => {
      expect(option).toHaveTextContent(ROWS_PER_PAGE_OPTIONS[index].toString())
    })
  })

  it('renders all the options with additional value', async () => {
    render(<RowsPerPage value={3} />)

    const select = screen.getByRole('combobox', { name: 'Rows per page' })
    await userEvent.click(select)

    const options = screen.getAllByRole('option')

    expect(options.length).toBe(ROWS_PER_PAGE_OPTIONS.length + 1)
    expect(options[0]).toHaveTextContent('3')
  })
})
