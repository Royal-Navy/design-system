import React from 'react'

const Link: React.FC<AnchorType> = ({ children, className = '', href }) => (
  <a className={`rn-link ${className}`} href={href} data-testid="link">
    {children}
  </a>
)

Link.displayName = 'Link'

export default Link
