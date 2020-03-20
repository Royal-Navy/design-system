import React from 'react'

export interface DataListItemProps {
  children: string
  description: string
}

export const DataListItem: React.FC<DataListItemProps> = ({
  children,
  description,
}) => (
  <div className="rn-data-list__item" data-testid="data-list-item">
    <dt className="rn-data-list__key">{description}</dt>
    <dd className="rn-data-list__value">{children}</dd>
  </div>
)

DataListItem.displayName = 'DataListItem'
