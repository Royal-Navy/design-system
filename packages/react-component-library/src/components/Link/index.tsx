import React from 'react'

const Link: React.FC<AnchorType> = ({
  children,
  className = 'rn-link',
  href = '#',
}) => (
  <a className={className} href={href} data-testid="link">
    {children}
  </a>
)

export default Link
