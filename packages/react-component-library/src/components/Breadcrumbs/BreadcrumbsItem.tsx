import React, { ReactElement } from 'react'

import { LinkTypes } from '../../common/Link'
import { StyledBreadcrumbsItem } from './partials/StyledBreadcrumbsItem'
import { StyledEndTitle } from './partials/StyledEndTitle'
import { StyledIcon } from './partials/StyledIcon'

export interface BreadcrumbsItemProps {
  isFirst?: boolean
  isLast?: boolean
  link: React.ReactElement<LinkTypes>
}

function getText(isLast: boolean, link: React.ReactElement<LinkTypes>) {
  if (isLast) {
    return (
      <StyledEndTitle aria-current="page" data-testid="breadcrumb-end-title">
        {(link as ReactElement).props.children}
      </StyledEndTitle>
    )
  }

  return link
}

export const BreadcrumbsItem: React.FC<BreadcrumbsItemProps> = ({
  isFirst,
  isLast,
  link,
}) => {
  return (
    <StyledBreadcrumbsItem data-testid="breadcrumb">
      {!isFirst && (
        <StyledIcon aria-hidden data-testid="breadcrumb-separator" />
      )}

      {getText(isLast, link)}
    </StyledBreadcrumbsItem>
  )
}

BreadcrumbsItem.displayName = 'BreadcrumbsItem'
