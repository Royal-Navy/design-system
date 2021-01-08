import React from 'react'
import { IconKeyboardArrowDown } from '@royalnavy/icon-library'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { DataListItem, DataListItemProps } from '.'
import { getId, warnIfOverwriting } from '../../helpers'
import { useOpenClose } from '../../hooks'
import { StyledAction } from './partials/StyledAction'
import { StyledBadge } from './partials/StyledBadge'
import { StyledDataList } from './partials/StyledDataList'
import { StyledHeader } from './partials/StyledHeader'
import { StyledSheet } from './partials/StyledSheet'
import { StyledTitle } from './partials/StyledTitle'

export interface DataListProps extends ComponentWithClass {
  children:
    | React.ReactElement<DataListItemProps>
    | React.ReactElement<DataListItemProps>[]
  isCollapsible?: boolean
  title: string
}

function getAriaAttributes(isCollapsible: boolean, expanded: boolean) {
  const sheetId = getId('sheet')

  if (isCollapsible) {
    return {
      'aria-expanded': expanded,
      'aria-label': expanded ? 'Hide data' : 'Show data',
      'aria-owns': sheetId,
    }
  }

  return null
}

export const DataList: React.FC<DataListProps> = ({
  className,
  isCollapsible,
  title,
  children,
}) => {
  const { open, toggle } = useOpenClose(false)
  const ariaAttributes = getAriaAttributes(isCollapsible, open)
  const sheetId = ariaAttributes && ariaAttributes['aria-owns']

  return (
    <StyledDataList $isCollapsible={isCollapsible} className={className}>
      <StyledHeader
        $isCollapsible={isCollapsible}
        onClick={toggle}
        data-testid="data-list-header"
        {...ariaAttributes}
      >
        <StyledTitle>
          {title}
          {isCollapsible && (
            <StyledBadge $isCollapsible={isCollapsible} size="small">
              {(children as React.ReactElement<DataListItemProps>[]).length}
            </StyledBadge>
          )}
        </StyledTitle>
        <StyledAction $isCollapsible={isCollapsible} $isOpen={open}>
          <IconKeyboardArrowDown aria-hidden data-testid="arrow-down-icon" />
        </StyledAction>
      </StyledHeader>
      <StyledSheet
        $isCollapsible={isCollapsible}
        $isOpen={open}
        data-testid="data-list-sheet"
        id={sheetId}
      >
        {React.Children.map(
          children,
          (child: React.ReactElement<DataListItemProps>) => {
            warnIfOverwriting(child.props, 'isCollapsible', DataListItem.name)

            return React.cloneElement(child, {
              ...child.props,
              isCollapsible,
            })
          }
        )}
      </StyledSheet>
    </StyledDataList>
  )
}

DataList.displayName = 'DataList'
