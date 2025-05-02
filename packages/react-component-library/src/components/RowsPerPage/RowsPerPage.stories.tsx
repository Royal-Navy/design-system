import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { RowsPerPage } from './RowsPerPage'

export default {
  component: RowsPerPage,
  title: 'Components/RowsPerPage',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<typeof RowsPerPage>

export const Default: StoryFn<typeof RowsPerPage> = (props) => {
  return <RowsPerPage {...props} />
}

Default.args = {
  value: 10,
  isDisabled: false,
}

