import React from 'react'

import { NavItem } from '../../../common/Nav'
import { StyledUserItem } from './partials/StyledUserItem'
import { StyledUserItemIcon } from './partials/StyledUserItemIcon'
import { StyledUserItemText } from './partials/StyledUserItemText'
import { StyledUserItemWrapper } from './partials/StyledUserItemWrapper'

export interface MastheadUserItemProps extends NavItem {
  /**
   * Icon to display next to the user menu item.
   */
  icon: React.ReactNode
}

export const MastheadUserItem = ({
  icon,
  link,
  ...rest
}: MastheadUserItemProps) => {
  const linkElement = link as React.ReactElement

  const item = React.cloneElement(linkElement, {
    ...link.props,
    children: (
      <StyledUserItem>
        <StyledUserItemIcon>{icon}</StyledUserItemIcon>
        <StyledUserItemText>{linkElement.props.children}</StyledUserItemText>
      </StyledUserItem>
    ),
  })

  return (
    <li data-testid="masthead-user-item" {...rest}>
      <StyledUserItemWrapper>{item}</StyledUserItemWrapper>
    </li>
  )
}

MastheadUserItem.displayName = 'MastheadUserItem'
