import React from 'react'

import { StyledItem } from './partials/StyledItem'
import { StyledItemKey } from './partials/StyledItemKey'
import { StyledItemValue } from './partials/StyledItemValue'

export interface DataListItemProps {
  children: string
  description: string
  isCollapsible?: boolean
}

export const DataListItem: React.FC<DataListItemProps> = ({
  children,
  description,
  isCollapsible,
}) => (
  <StyledItem $isCollapsible={isCollapsible} data-testid="data-list-item">
    <StyledItemKey>{description}</StyledItemKey>
    <StyledItemValue>{children}</StyledItemValue>
  </StyledItem>
)

DataListItem.displayName = 'DataListItem'
