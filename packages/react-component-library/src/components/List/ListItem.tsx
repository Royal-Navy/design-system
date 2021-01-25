import React from 'react'
import { IconChevronRight } from '@royalnavy/icon-library'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { getId } from '../../helpers'
import { StyledItem } from './partials/StyledItem'
import { StyledItemContent } from './partials/StyledItemContent'
import { StyledItemTitle } from './partials/StyledItemTitle'
import { StyledItemDescription } from './partials/StyledItemDescription'
import { StyledItemAction } from './partials/StyledItemAction'

export interface ListItemProps extends ComponentWithClass {
  children: string | string[]
  isActive?: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void
  title: string
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  isActive,
  onClick,
  onMouseEnter,
  onMouseLeave,
  title,
  ...rest
}) => {
  const titleId = getId('list-title')

  return (
    <StyledItem
      $isInactive={isActive === false}
      data-testid="list-item"
      role="presentation"
      {...rest}
    >
      <StyledItemContent
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div role="listitem" aria-labelledby={titleId}>
          <StyledItemTitle id={titleId} data-testid="list-item-heading">
            {title}
          </StyledItemTitle>
          <StyledItemDescription>{children}</StyledItemDescription>
        </div>
        <div>
          <StyledItemAction>
            <IconChevronRight />
          </StyledItemAction>
        </div>
      </StyledItemContent>
    </StyledItem>
  )
}

ListItem.displayName = 'ListItem'
