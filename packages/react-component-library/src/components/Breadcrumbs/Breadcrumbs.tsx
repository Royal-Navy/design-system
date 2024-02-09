import React from 'react'

import { BreadcrumbsItem, BreadcrumbsItemProps } from '.'
import { Nav } from '../../common/Nav'
import { warnIfOverwriting } from '../../helpers'
import { StyledBreadcrumbsList } from './partials/StyledBreadcrumbsList'

export const Breadcrumbs = ({
  children,
  ...rest
}: Nav<BreadcrumbsItemProps>) => {
  const mapped = React.Children.map(
    children ?? [],
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

  return (
    <nav aria-label="Breadcrumb" data-testid="breadcrumb-wrapper" {...rest}>
      <StyledBreadcrumbsList>{mapped}</StyledBreadcrumbsList>
    </nav>
  )
}

Breadcrumbs.displayName = 'Breadcrumbs'
