import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ children, className = '', href, ...rest }) => {
  return (
    <>
      <a
        className={`rn-link ${className}`}
        href={href}
        data-testid="link"
        {...rest}
      >
        {children}
      </a>
      {children && <button type="button" className="sidebar__toggle" />}
    </>
  )
}

Link.propTypes = {
  children: PropTypes.instanceOf(Array),
  className: PropTypes.string,
  href: PropTypes.string,
}

Link.defaultProps = {
  children: [],
  className: '',
  href: '',
}

Link.displayName = 'Link'

export default Link
