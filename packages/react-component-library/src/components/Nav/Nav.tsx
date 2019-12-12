import React from 'react'
import classNames from 'classnames'

import { NavItemProps } from '.'

interface NavProps {
  className?: string
  children: React.ReactElement<NavItemProps>[]
  orientation?: 'vertical' | 'horizontal'
  size?: 'small' | 'regular' | 'large' | 'xlarge'
}

export const Nav: React.FC<NavProps> = ({
  className,
  children,
  orientation = 'vertical',
  size = 'regular',
}) => {
  const classes = classNames(
    'rn-nav',
    `rn-nav--${orientation}`,
    `rn-nav--${size}`,
    className
  )

  return (
    <nav className={classes} data-testid="nav">
      <ul className="rn-nav__list">{children}</ul>
    </nav>
  )
}

Nav.displayName = 'Nav'
