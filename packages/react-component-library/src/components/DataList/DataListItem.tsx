import React from 'react'

import { StyledItem } from './partials/StyledItem'
import { StyledItemKey } from './partials/StyledItemKey'
import { StyledItemValue } from './partials/StyledItemValue'

export interface DataListItemProps {
  /**
   * Value text to display for the item.
   */
  children: string
  /**
   * Key text to display for the item.
   */
  description: string
  /**
   * Toggles whether the item is part of a collapsable list.
   * @private
   */
  isCollapsible?: boolean
}

export const DataListItem: React.FC<DataListItemProps> = ({
  children,
  description,
  isCollapsible,
  ...rest
}) => (
  <StyledItem
    $isCollapsible={isCollapsible}
    data-testid="data-list-item"
    {...rest}
  >
    <StyledItemKey>{description}</StyledItemKey>
    <StyledItemValue>{children}</StyledItemValue>
  </StyledItem>
)

DataListItem.displayName = 'DataListItem'
