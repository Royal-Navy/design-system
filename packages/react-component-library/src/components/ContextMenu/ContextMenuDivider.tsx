import React from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

const StyledContextMenuDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color('neutral', '100')};
  margin: ${spacing('2')} 0;
`

export const ContextMenuDivider: React.FC = () => {
  return <StyledContextMenuDivider data-testid="context-menu-divider" />
}

ContextMenuDivider.displayName = 'ContextMenuDivider'
