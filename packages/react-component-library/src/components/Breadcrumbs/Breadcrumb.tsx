import React from 'react'

import Link from '../Link'
import Separator from './images/separator.svg'
import EndTitle from './EndTitle'

interface BreadcrumbProps {
  isFirst?: boolean
  label: string
  isLast?: boolean
  LinkComponent?: any
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  isFirst,
  label,
  isLast,
  LinkComponent = Link,
  ...rest
}) => {
  const ComponentToUse: any = isLast ? EndTitle : LinkComponent

  return (
    <li data-testid="breadcrumb" className="rn-breadcrumbs__breadcrumb">
      {!isFirst && (
        <span data-testid="separator" className="rn-breadcrumbs__seperator">
          <Separator />
        </span>
      )}
      <ComponentToUse className="rn-breadcrumbs__link" {...rest}>
        {label}
      </ComponentToUse>
    </li>
  )
}

Breadcrumb.displayName = 'Breadcrumb'

export default Breadcrumb
