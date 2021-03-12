import React from 'react'

import { Tooltip } from '../Tooltip'

export const PaginationErrorMessage: React.FC = () => (
  <Tooltip top={-35} right={3} width={155}>
    Check page number
  </Tooltip>
)

PaginationErrorMessage.displayName = 'PaginationErrorMessage'
