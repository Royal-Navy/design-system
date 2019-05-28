import React from 'react'

import Link from './Link'

const NavItem: React.FC<any> = ({ Component = Link, ...rest }) => (
  <Component className="rn-nav__item" {...rest} />
)

export default NavItem
