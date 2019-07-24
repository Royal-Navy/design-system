/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'

interface NavItemProps {
  children?: any
  hasChildren: boolean
}

const NavItem: React.FC<NavItemProps> = ({ children, hasChildren = false }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li
      className={`rn-nav__list-item ${hasChildren ? 'has-children' : ''} ${
        isOpen ? 'is-open' : ''
      }`}
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
