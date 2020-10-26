import React from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

const StyledContextMenuDivider = styled.div`
  height: 1px;
  background-color: ${color('neutral', '100')};
  margin: ${spacing('2')} -${spacing('2')};
`

export const ContextMenuDivider: React.FC = () => {
  return <StyledContextMenuDivider data-testid="context-menu-divider" />
}

ContextMenuDivider.displayName = 'ContextMenuDivider'
