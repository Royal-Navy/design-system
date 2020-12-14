import React from 'react'
import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { useRightClick } from '../../hooks/useRightClick'
import { StyledText } from './ContextMenuItem'

interface ContextMenuProps extends ComponentWithClass {
  attachedToRef?: React.RefObject<HTMLElement>
}

interface StyledContextMenuProps {
  top: number
  left: number
  $hasIcons: boolean
}

const { color, spacing } = selectors

const StyledContextMenu = styled.ol<StyledContextMenuProps>`
  position: fixed;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  min-width: 120px;
  max-width: 240px;
  padding: ${spacing('2')};
  list-style-type: none;
  background-color: ${color('neutral', 'white')};
  border-radius: 4px;
  border: 1px solid ${color('neutral', '200')};
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.04);

  ${({ $hasIcons }) =>
    !$hasIcons &&
    css`
      ${StyledText} {
        margin-left: 0;
      }
    `}
`

export const ContextMenu: React.FC<ContextMenuProps> = ({
  className,
  children,
  attachedToRef,
}) => {
  const { position, isOpen } = useRightClick(attachedToRef)

  const hasIcons = !!React.Children.toArray(children).filter(
    (child: React.ReactNode) => (child as React.ReactElement)?.props?.icon
  ).length

  return (
    <>
      {isOpen && (
        <StyledContextMenu
          className={className}
          top={position.y}
          left={position.x}
          $hasIcons={hasIcons}
          data-testid="context-menu"
        >
          {children}
        </StyledContextMenu>
      )}
    </>
  )
}

ContextMenu.displayName = 'ContextMenu'
