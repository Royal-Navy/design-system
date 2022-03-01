import React from 'react'

import { StyledItem } from './partials/StyledItem'
import { StyledItemKey } from './partials/StyledItemKey'
import { StyledItemValue } from './partials/StyledItemValue'

export interface DescriptionListItemProps {
  /**
   * Value text to display for the item.
   */
  children: string
  /**
   * Key text to display for the item.
   */
  title: string
  /**
   * Toggles whether the item is part of a collapsable list.
   * @private
   */
  isCollapsible?: boolean
}

export const DescriptionListItem: React.FC<DescriptionListItemProps> = ({
  children,
  title,
  isCollapsible = false,
  ...rest
}) => (
  <StyledItem
    $isCollapsible={isCollapsible}
    data-testid="description-list-item"
    {...rest}
  >
    <StyledItemKey>{title}</StyledItemKey>
    <StyledItemValue>{children}</StyledItemValue>
  </StyledItem>
)

DescriptionListItem.displayName = 'DescriptionListItem'
