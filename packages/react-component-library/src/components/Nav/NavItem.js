import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'

const NavItem = ({ Component, ...rest }) => (
  <Component class="rn-nav__item" {...rest} />
)

NavItem.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.element,
  ]),
  label: PropTypes.string.isRequired,
}

NavItem.defaultProps = {
  Component: Link,
}

export default NavItem
