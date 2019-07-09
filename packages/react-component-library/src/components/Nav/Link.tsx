import React from 'react'

interface LinkProps {
  className?: string
  href: string
}

const Link: React.FC<LinkProps> = ({
  children,
  className = 'rn-nav__item',
  href,
}) => (
  <a className={className} href={href}>
    {children}
  </a>
)

Link.displayName = 'Link'

export default Link
