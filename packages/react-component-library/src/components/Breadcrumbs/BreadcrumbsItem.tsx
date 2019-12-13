import React from 'react'

import { EndTitle } from '.'
import Separator from './images/separator.svg'

export interface BreadcrumbsItemProps {
  isFirst?: boolean
  isLast?: boolean
  link: React.ReactElement
}

export const BreadcrumbsItem : React.FC<BreadcrumbsItemProps> = ({
  isFirst,
  isLast,
  link,
}) => {
  return (
    <li data-testid="breadcrumb" className="rn-breadcrumbs__breadcrumb">
      {!isFirst && (
        <span data-testid="separator" className="rn-breadcrumbs__separator">
          <Separator />
        </span>
      )}
      {isLast ? <EndTitle>{link.props.children}</EndTitle> : link}
    </li>
  )
}

BreadcrumbsItem .displayName = 'BreadcrumbsItem '
