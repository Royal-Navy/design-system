import React from 'react'
import classNames from 'classnames'

import { BreadcrumbsItemProps } from '.'

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
      if (child.props.isFirst) {
        console.warn('Prop `isFirst` on `Breadcrumb` will be overwritten')
      }
      if (child.props.isLast) {
        console.warn('Prop `isLast` on `Breadcrumb` will be overwritten')
      }

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
