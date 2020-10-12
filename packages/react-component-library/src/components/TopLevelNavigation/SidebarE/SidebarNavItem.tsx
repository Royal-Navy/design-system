import React, { useContext } from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { NavItem } from '../../../common/Nav'
import { SidebarContext } from './context'

export interface SidebarNavItemProps extends NavItem {
  icon?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

interface StyledNavItemProps {
  isActive?: boolean
}

interface StyledTextProps {
  hasIcon?: boolean
}

const { color, spacing, fontSize } = selectors

const StyledNavItem = styled.div<StyledNavItemProps>`
  margin: ${spacing('4')} 0;
  border-radius: 2px;

  > * {
    display: flex;
    align-items: center;
  }

  &:hover {
    background-color: ${color('action', '500')};

    > * {
      text-decoration: none;
    }
  }
`

const StyledIcon = styled.div`
  display: inline-flex;
  align-items: center;
  padding: ${spacing('5')};
  margin-right: ${spacing('2')};

  svg {
    color: ${color('neutral', '100')};

    ${StyledNavItem}:hover & {
      color: ${color('neutral', 'white')};
    }
  }
`

const StyledText = styled.div<StyledTextProps>`
  display: inline-block;
  color: ${color('neutral', '100')};
  font-size: ${fontSize('m')};

  ${StyledNavItem}:hover & {
    color: ${color('neutral', 'white')};
  }
`

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  isActive,
  link,
  icon,
  onClick,
}) => {
  const { isOpen } = useContext(SidebarContext)
  const linkElement = link as React.ReactElement

  // TODO: Need to render optional sub-children

  const item = React.cloneElement(linkElement, {
    ...link.props,
    children: (
      <>
        {icon && <StyledIcon>{icon}</StyledIcon>}
        {isOpen && (
          <StyledText hasIcon={!!icon}>{linkElement.props.children}</StyledText>
        )}
      </>
    ),
    'data-testid': 'sidebar-nav-item',
    onClick,
    'aria-label': linkElement.props.children,
  })

  return <StyledNavItem isActive={isActive}>{item}</StyledNavItem>
}

SidebarNavItem.displayName = 'SidebarNavItem'
