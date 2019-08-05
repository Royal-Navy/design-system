import React from 'react'

import Link from '../Link'
import Separator from './images/separator.svg'
import EndTitle from './EndTitle'

interface BreadcrumbProps {
  first?: boolean
  label: string
  last?: boolean
  LinkComponent?: any
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  first,
  label,
  last,
  LinkComponent = Link,
  ...rest
}) => {
  const ComponentToUse: LinkTypes | EndTitle = last ? EndTitle : LinkComponent
  return (
    <li data-testid="breadcrumb" className="rn-breadcrumbs__breadcrumb">
      {!first && (
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
