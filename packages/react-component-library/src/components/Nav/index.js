import React from 'react'
import PropTypes from 'prop-types'

const NavItem = navItem => (
  <a className="rn-nav__item" href={navItem.url}>
    {navItem.label}
  </a>
)

const Nav = ({ navItems, orientation }) => (
  <nav className={`rn-nav ${orientation}`}>{navItems.map(NavItem)}</nav>
)

Nav.propTypes = {
  /** The links to use within the nav, specified as an object with two items:
   * 'url': The link the nav item should go to,
   * 'label' : The text the nav item should display
   */
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** The type of navigation to use, can be one of 'horizontal' or 'vertical */
  orientation: PropTypes.string,
}

Nav.defaultProps = {
  orientation: 'vertical',
}

export default Nav
