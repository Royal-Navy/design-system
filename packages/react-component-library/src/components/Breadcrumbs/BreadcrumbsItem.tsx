import React, { ReactElement } from 'react'

import { IconChevronRight } from '@royalnavy/icon-library'

import { EndTitle } from '.'
import { LinkTypes } from '../../common/Link'

export interface BreadcrumbsItemProps {
  isFirst?: boolean
  isLast?: boolean
  link: React.ReactElement<LinkTypes>
}

export const BreadcrumbsItem: React.FC<BreadcrumbsItemProps> = ({
  isFirst,
  isLast,
  link,
}) => {
  return (
    <li data-testid="breadcrumb" className="rn-breadcrumbs__breadcrumb">
      {!isFirst && (
        <IconChevronRight
          className="rn-breadcrumbs__separator"
          aria-hidden
          data-testid="breadcrumb-separator"
        />
      )}
      {isLast ? (
        <EndTitle>{(link as ReactElement).props.children}</EndTitle>
      ) : (
        link
      )}
    </li>
  )
}

BreadcrumbsItem.displayName = 'BreadcrumbsItem'
