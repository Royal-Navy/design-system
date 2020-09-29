import React from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { ComponentWithClass } from '../../common/ComponentWithClass'

const { color } = selectors

const StyledContextMenu = styled.ol`
  width: 12rem;
  padding: 0;
  list-style-type: none;
  background-color: ${color('neutral', 'white')};
  border-radius: 4px;
  border: 1px solid ${color('neutral', '200')};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.07);
`

export const ContextMenu: React.FC<ComponentWithClass> = ({
  className,
  children,
}) => {
  return <StyledContextMenu className={className}>{children}</StyledContextMenu>
}

ContextMenu.displayName = 'ContextMenu'
