import React from 'react'
import classNames from 'classnames'

import { BreadcrumbsItem, BreadcrumbsItemProps } from '.'
import { Nav } from '../../types/Nav'
import { warnIfOverwriting } from '../../helpers'

export const Breadcrumbs: React.FC<Nav<BreadcrumbsItemProps>> = ({
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
        isLast: !Array.isArray(children) || index === children.length - 1,
      })
    }
  )

  return <ul className={classes}>{mapped}</ul>
}

Breadcrumbs.displayName = 'Breadcrumbs'
