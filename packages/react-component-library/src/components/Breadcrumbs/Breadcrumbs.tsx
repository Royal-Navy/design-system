import React from 'react'
import classNames from 'classnames'

import { BreadcrumbsItem, BreadcrumbsItemProps } from '.'
import { warnIfOverwriting } from '../../helpers'

interface BreadcrumbsProps extends ComponentWithClass {
  children: React.ReactElement<BreadcrumbsItemProps>[]
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  children,
  className,
}) => {
  const classes = classNames('rn-breadcrumbs', className)

  const mapped = React.Children.map(
    children,
    (child: React.ReactElement<BreadcrumbsItemProps>, index: number) => {
      warnIfOverwriting(child.props, 'isFirst', BreadcrumbsItem.name)
      warnIfOverwriting(child.props, 'isLast', BreadcrumbsItem.name)

      return React.cloneElement(child, {
        ...child.props,
        isFirst: index === 0,
        isLast: index === children.length - 1,
      })
    }
  )

  return <ul className={classes}>{mapped}</ul>
}

Breadcrumbs.displayName = 'Breadcrumbs'
