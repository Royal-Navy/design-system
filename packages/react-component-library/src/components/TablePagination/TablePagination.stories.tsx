import React, { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react-webpack5'
import { styled } from 'styled-components'

import { TablePagination } from './TablePagination'

export default {
  component: TablePagination,
  title: 'Components/TablePagination',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<typeof TablePagination>

const Wrapper = styled.div`
  min-height: 18rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

const Template: StoryFn<typeof TablePagination> = ({
  count,
  rowsPerPage: initialRowsPerPage,
  showFirstLastButtons,
}) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage)

  return (
    <Wrapper>
      <TablePagination
        count={count}
        page={page}
        rowsPerPage={rowsPerPage}
        showFirstLastButtons={showFirstLastButtons}
        onPageChange={(_, newPage) => setPage(newPage)}
        onRowsPerPageChange={(value) => {
          setRowsPerPage(value)
          setPage(0)
        }}
      />
    </Wrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  count: 1340,
  rowsPerPage: 50,
}

export const WithFirstAndLastButtons = Template.bind({})
WithFirstAndLastButtons.storyName = 'With first and last buttons'
WithFirstAndLastButtons.args = {
  count: 1340,
  rowsPerPage: 50,
  showFirstLastButtons: true,
}
