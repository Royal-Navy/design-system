import React from 'react'
import uuid from 'uuid'

import Breadcrumb from './Breadcrumb'

interface BreadcrumbsProps {
  className?: string
  links: any[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ className = '', links }) => (
  <ul className={`rn-breadcrumbs ${className}`}>
    {links.map((link, index) => (
      <Breadcrumb
        key={uuid()}
        {...link}
        first={index === 0}
        last={index === links.length - 1}
      />
    ))}
  </ul>
)

Breadcrumbs.displayName = 'Breadcrumbs'

export default Breadcrumbs
