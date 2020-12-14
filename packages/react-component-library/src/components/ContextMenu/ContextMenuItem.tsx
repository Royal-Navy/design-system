import React from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { NavItem } from '../../common/Nav'

interface ContextMenuItemProps extends NavItem {
  icon?: React.ReactNode
}

interface StyledTextProps {
  hasIcon?: boolean
}

const { color, fontSize, spacing } = selectors

export const StyledContextMenuItem = styled.li`
  border-radius: 2px;

  > * {
    text-overflow: ellipsis;
    display: flex;
    padding: ${spacing('3')} ${spacing('4')};
    line-height: 1.2;
  }

  &:hover {
    background-color: ${color('neutral', '100')};

    > * {
      text-decoration: none;
    }
  }
`

export const StyledIcon = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: ${spacing('2')};

  svg {
    color: ${color('neutral', '300')};
  }
`

export const StyledText = styled.div<StyledTextProps>`
  color: ${color('neutral', '400')};
  font-weight: 600;
  font-size: ${fontSize('base')};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${({ hasIcon }) => !hasIcon && `margin-left: 1.25rem;`}

  ${StyledContextMenuItem}:hover & {
    color: ${color('neutral', '400')};
  }
`

export const ContextMenuItem: React.FC<ContextMenuItemProps> = ({
  icon,
  link,
}) => {
  const linkElement = link as React.ReactElement

  const item = React.cloneElement(linkElement, {
    ...link.props,
    children: (
      <>
        {icon && <StyledIcon>{icon}</StyledIcon>}
        <StyledText hasIcon={!!icon} data-testid="context-menu-item-text">
          {linkElement.props.children}
        </StyledText>
      </>
    ),
  })

  return <StyledContextMenuItem>{item}</StyledContextMenuItem>
}

ContextMenuItem.displayName = 'ContextMenuItem'
