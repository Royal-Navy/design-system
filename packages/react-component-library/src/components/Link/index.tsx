import React from 'react'

interface LinkProps {
  className?: string
  href: string
}

const Link: React.FC<LinkProps> = ({
  children,
  className = 'rn-link',
  href,
}) => (
  <a className={className} href={href} data-testid="link">
    {children}
  </a>
)

export default Link
