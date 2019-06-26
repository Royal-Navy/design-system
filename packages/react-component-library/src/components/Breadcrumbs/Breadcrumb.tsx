import React from 'react'

import Link from '../Link'
import Separator from './images/separator.svg'
import EndTitle from './EndTitle'

const Breadcrumb: React.FC<any> = ({
  Component = Link,
  first,
  label,
  last,
  ...rest
}) => {
  const ComponentToUse = last ? EndTitle : Component
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

export default Breadcrumb
