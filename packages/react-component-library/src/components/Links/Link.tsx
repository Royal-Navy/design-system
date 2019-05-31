import React from 'react'

interface LinkProps {
  className?: string
  href: string
}

const Link: React.FC<LinkProps> = ({
  children,
  className = 'rn-links__link',
  href,
}) => (
  <a className={className} href={href}>
    {children}
  </a>
)

export default Link
