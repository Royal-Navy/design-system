/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { some, get } from 'lodash'

interface NavItemProps {
  children?: any
  hasChildren: boolean
}

function hasActiveChild(children?: React.ReactElement[]): boolean {
  return some(children, (child: React.ReactElement) => {
    const className = get(child, 'props.className')

    return (
      (className && className.includes('is-active')) ||
      hasActiveChild(get(child, 'props.children'))
    )
  })
}

export const NavItem: React.FC<NavItemProps> = ({
  children,
  hasChildren = false,
}) => {
  const foundActive = hasActiveChild(children)
  const [isOpen, setIsOpen] = useState<boolean>(foundActive && hasChildren)
  const classes = `
    rn-nav__list-item
    ${hasChildren ? 'has-children' : ''}
    ${isOpen ? 'is-open' : ''}
  `

  return (
    <li
      className={classes}
      data-testid="nav-item"
      onClick={() => {
        setIsOpen(hasChildren && !isOpen)
      }}
    >
      {children}
    </li>
  )
}

NavItem.displayName = 'NavItem'
