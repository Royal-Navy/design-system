import React from 'react'

import { NavItem } from '../../../common/Nav'
import { StyledUserItem } from './partials/StyledUserItem'
import { StyledUserItemIcon } from './partials/StyledUserItemIcon'
import { StyledUserItemText } from './partials/StyledUserItemText'
import { StyledUserItemWrapper } from './partials/StyledUserItemWrapper'

export interface MastheadUserItemProps extends NavItem {
  icon: React.ReactNode
}

export const MastheadUserItem: React.FC<MastheadUserItemProps> = ({
  icon,
  link,
  ...rest
}) => {
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
