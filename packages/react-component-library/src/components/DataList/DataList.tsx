import React from 'react'
import { IconKeyboardArrowDown } from '@defencedigital/icon-library'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { DataListItem, DataListItemProps } from '.'
import { getId, warnIfOverwriting } from '../../helpers'
import { useOpenClose } from '../../hooks'
import { StyledAction } from './partials/StyledAction'
import { StyledBadge } from './partials/StyledBadge'
import { StyledDataList } from './partials/StyledDataList'
import { StyledHeader } from './partials/StyledHeader'
import { StyledSheet } from './partials/StyledSheet'
import { StyledDescription } from './partials/StyledDescription'

export interface DataListProps extends ComponentWithClass {
  /**
   * Collection of `DataListItem` components to display in the list.
   */
  children:
    | React.ReactElement<DataListItemProps>
    | React.ReactElement<DataListItemProps>[]
  /**
   * Toggles whether the list is collapsable via user input.
   */
  isCollapsible?: boolean
  /**
   * Text description to display at the top of the component.
   */
  description: string
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
  isCollapsible,
  description,
  children,
  ...rest
}) => {
  const { open, toggle } = useOpenClose(false)
  const ariaAttributes = getAriaAttributes(isCollapsible, open)
  const sheetId = ariaAttributes && ariaAttributes['aria-owns']

  return (
    <StyledDataList
      $isCollapsible={isCollapsible}
      data-testid="data-list"
      {...rest}
    >
      <StyledHeader
        $isCollapsible={isCollapsible}
        onClick={toggle}
        data-testid="data-list-header"
        {...ariaAttributes}
      >
        <StyledDescription>
          {description}
          {isCollapsible && (
            <StyledBadge $isCollapsible={isCollapsible} size="small">
              {(children as React.ReactElement<DataListItemProps>[]).length}
            </StyledBadge>
          )}
        </StyledDescription>
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
