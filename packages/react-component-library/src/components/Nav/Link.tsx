import React from 'react'

interface LinkProps {
  active?: boolean
  className?: string
  href: string
  label: string
}

const Link: React.FC<LinkProps> = ({
  active = false,
  className = 'rn-nav__item',
  href,
  label,
}) => (
  <a className={`${className}${active ? ' is-active' : ''}`} href={href}>
    {label}
  </a>
)

export default Link
