import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'

import NavItem from './NavItem'

const Nav = ({ className, navItems, orientation, size }) => (
  <nav className={`rn-nav rn-nav--${orientation} rn-nav--${size} ${className}`}>
    {navItems.map(item => (
      <NavItem key={uuid()} {...item} />
    ))}
  </nav>
)

Nav.propTypes = {
  className: PropTypes.string,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.func,
      label: PropTypes.string,
    })
  ).isRequired,
  orientation: PropTypes.string,
  size: PropTypes.string,
}

Nav.defaultProps = {
  className: '',
  orientation: 'vertical',
  size: 'medium',
}

export default Nav
