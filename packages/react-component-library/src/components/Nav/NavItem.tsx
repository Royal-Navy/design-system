/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import Children from 'react-children-utilities'

interface NavItemProps {
  children?: any
  hasChildren: boolean
}

const NavItem: React.FC<NavItemProps> = ({ children, hasChildren = false }) => {
  // @ts-ignore
  const foundActive = !!Children.deepFind(children, ({ props }) => props.active)
  const [isOpen, setIsOpen] = useState(foundActive && hasChildren)

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

export default NavItem
