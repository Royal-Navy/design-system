import React from 'react'
import uuid from 'uuid'

import Link from '../Link'
import Breadcrumb from './Breadcrumb'

interface BreadcrumbsProps extends ComponentWithClass {
  LinkComponent?: LinkTypes
  navItems: any[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  className = '',
  LinkComponent = Link,
  navItems,
}) => (
  <ul className={`rn-breadcrumbs ${className}`}>
    {navItems.map((link, index) => (
      <Breadcrumb
        key={uuid()}
        LinkComponent={LinkComponent}
        {...link}
        first={index === 0}
        last={index === navItems.length - 1}
      />
    ))}
  </ul>
)

Breadcrumbs.displayName = 'Breadcrumbs'

export default Breadcrumbs
