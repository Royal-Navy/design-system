import React, { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import styled from 'styled-components'

import { RowsPerPage } from './RowsPerPage'

export default {
  component: RowsPerPage,
  title: 'Components/RowsPerPage',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<typeof RowsPerPage>

const Wrapper = styled.div`
    min-height: 18rem;
`

export const Default: StoryFn<typeof RowsPerPage> = () => {
  return <Wrapper><RowsPerPage /></Wrapper>
}

export const WithItemRange: StoryFn<typeof RowsPerPage> = () => {
  const [value, setValue] = useState('10')
  const [currentPage, setCurrentPage] = useState(1)
  const totalItems = 134
  const rowsPerPage = Number(value)
  const totalPages = Math.ceil(totalItems / rowsPerPage)

  const handleChange = (newValue: string | null) => {
    if (newValue) {
      setValue(newValue)
      // Reset to page 1 when rows per page changes
      setCurrentPage(1)
    }
  }

  return (
    <Wrapper>
      <RowsPerPage
        showItemRange
        currentPage={currentPage}
        totalItems={totalItems}
        value={value}
        onChange={handleChange}
      />

      <div style={{ marginTop: '2rem' }}>
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span style={{ margin: '0 1rem' }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          Next Page
        </button>
      </div>
    </Wrapper>
  )
}

WithItemRange.storyName = 'With item range'
WithItemRange.parameters = {
  docs: {
    description: {
      story:
        'When `showItemRange` is enabled, the component displays "Showing X to Y of Z" text alongside the rows per page selector.',
    },
  },
}
