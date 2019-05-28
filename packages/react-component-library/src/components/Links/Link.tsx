import React from 'react'

interface LinkProps {
  className?: string
  href: string
  label: string
}

const Link: React.FC<LinkProps> = ({
  className = 'rn-links__link',
  href,
  label,
}) => (
  <a className={className} href={href}>
    {label}
  </a>
)

export default Link
