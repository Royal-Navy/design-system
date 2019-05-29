import React from 'react'
import uuid from 'uuid'

import LinkItem from './LinkItem'

import '@royalnavy/css-framework/src/components/_links.scss'

interface LinksProps {
  className?: string
  links: any[]
  size?: 'small' | 'regular'
}

const Links: React.FC<LinksProps> = ({
  className = '',
  links,
  size = 'regular',
}) => (
  <ul className={`rn-links rn-links--${size} ${className}`}>
    {links.map(link => (
      <LinkItem key={uuid()} {...link} />
    ))}
  </ul>
)

export default Links
