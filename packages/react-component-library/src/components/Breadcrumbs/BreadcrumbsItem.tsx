import React, { ReactElement } from 'react'

import { IconChevronRight } from '@royalnavy/icon-library'

import { EndTitle } from '.'

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
          data-testid="separator"
          className="rn-breadcrumbs__separator"
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
