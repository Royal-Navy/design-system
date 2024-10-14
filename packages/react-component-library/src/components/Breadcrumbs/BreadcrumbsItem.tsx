import React, { ReactElement } from 'react'

import { LinkProps } from '../../common/Link'
import { StyledBreadcrumbsItem } from './partials/StyledBreadcrumbsItem'
import { StyledEndTitle } from './partials/StyledEndTitle'
import { StyledIcon } from './partials/StyledIcon'
import { ComponentWithClass } from '../../common/ComponentWithClass'

export interface BreadcrumbsItemBaseProps extends ComponentWithClass {
  /**
   * Denotes whether this is the first item.
   * @private
   */
  isFirst?: boolean
  /**
   * Denotes whether this is the last item.
   * @private
   */
  isLast?: boolean
}

export interface BreadcrumbsItemWithLinkProps extends BreadcrumbsItemBaseProps {
  /**
   * Optional Link component to use for the item (redundant if `href` is used).
   */
  link: React.ReactElement<LinkProps>
  href?: never
}

export interface BreadcrumbsItemWithHrefProps extends BreadcrumbsItemBaseProps {
  /**
   * Optional `href` attribute to apply to HTML anchor (redundant if `link` is used).
   */
  href: string
  link?: never
}

export type BreadcrumbsItemProps =
  | BreadcrumbsItemWithLinkProps
  | BreadcrumbsItemWithHrefProps

function getText(
  isLast: boolean,
  link?: React.ReactElement<LinkProps>,
  href?: string,
  children?: React.ReactNode
): React.ReactElement {
  if (isLast) {
    return (
      <StyledEndTitle aria-current="page" data-testid="breadcrumb-end-title">
        {link ? (link as ReactElement).props.children : children}
      </StyledEndTitle>
    )
  }

  return link || <a href={href}>{children}</a>
}

export const BreadcrumbsItem = ({
  isFirst,
  isLast = false,
  link,
  href,
  children,
  ...rest
}: BreadcrumbsItemProps) => {
  return (
    <StyledBreadcrumbsItem data-testid="breadcrumb" {...rest}>
      {!isFirst && (
        <StyledIcon aria-hidden data-testid="breadcrumb-separator" />
      )}

      {getText(isLast, link, href, children)}
    </StyledBreadcrumbsItem>
  )
}

BreadcrumbsItem.displayName = 'BreadcrumbsItem'
