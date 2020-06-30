import React from 'react'

import { NavItem } from '../../../types/Nav'

export interface MastheadUserItemProps extends NavItem {
  icon: React.ReactNode
}

export const MastheadUserItem: React.FC<MastheadUserItemProps> = ({
  icon,
  link,
}) => {
  const linkElement = link as React.ReactElement

  const item = React.cloneElement(linkElement, {
    ...link.props,
    children: (
      <div className="rn-masthead__user-item">
        <div className="rn-masthead__user-item-icon">{icon}</div>
        <div className="rn-masthead__user-item-text">{linkElement.props.children}</div>
      </div>
    ),
  })

  return (
    <li className="rn-masthead__user-item-blah">
      <div className="rn-masthead__user-item-wrapper">{item}</div>
    </li>
  )
}

MastheadUserItem.displayName = 'MastheadUserItem'
