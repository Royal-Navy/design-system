import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ children, className = '', href, hasChildren, ...rest }) => {
  const ConditionalTag = hasChildren ? 'span' : 'a'

  return (
    <ConditionalTag
      className={`rn-link ${className}`}
      href={href}
      data-testid="link"
      {...rest}
    >
      {children}
    </ConditionalTag>
  )
}

Link.propTypes = {
  children: PropTypes.instanceOf(Array),
  className: PropTypes.string,
  href: PropTypes.string,
  hasChildren: PropTypes.bool,
}

Link.defaultProps = {
  children: [],
  className: '',
  href: '',
  hasChildren: false,
}

Link.displayName = 'Link'

export default Link
