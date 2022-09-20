import React from 'react'

import { StyledContextMenuDivider } from './partials/StyledContextMenuDivider'

export const ContextMenuDivider: React.FC = () => {
  return (
    <StyledContextMenuDivider
      data-testid="context-menu-divider"
      role="separator"
    />
  )
}

ContextMenuDivider.displayName = 'ContextMenuDivider'
