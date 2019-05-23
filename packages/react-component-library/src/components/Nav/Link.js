import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, className, href, label }) => (
  <a className={`${className}${active ? ' is-active' : ''}`} href={href}>
    {label}
  </a>
)

Link.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

Link.defaultProps = {
  active: false,
  className: 'rn-nav__item',
}

export default Link
