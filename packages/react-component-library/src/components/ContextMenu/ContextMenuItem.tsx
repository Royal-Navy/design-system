import React from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { NavItem } from '../../common/Nav'

interface ContextMenuItemProps extends NavItem {
  icon?: React.ReactNode
}

const { color, fontSize, spacing } = selectors

const StyledContextMenuItem = styled.li`
  overflow: hidden;

  &:first-of-type {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-of-type {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  > * {
    display: flex;
    padding: ${spacing('4')} ${spacing('6')};
    overflow: hidden;
    text-overflow: ellipsis;
    text-wrap: none;
  }

  &:hover {
    background-color: ${color('neutral', '000')};

    > * {
      text-decoration: none;
    }
  }
`

const StyledIcon = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: ${spacing('4')};

  svg {
    color: ${color('neutral', '500')};
  }
`

interface StyledTextProps {
  hasIcon?: boolean
}

const StyledText = styled.div<StyledTextProps>`
  color: ${color('neutral', '300')};
  font-weight: 600;
  font-size: ${fontSize('s')};
  ${({ hasIcon }) => !hasIcon && `margin-left: 1.5rem;`}

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
        <StyledText hasIcon={!!icon}>{linkElement.props.children}</StyledText>
      </>
    ),
  })

  return <StyledContextMenuItem>{item}</StyledContextMenuItem>
}

ContextMenuItem.displayName = 'ContextMenuItem'
