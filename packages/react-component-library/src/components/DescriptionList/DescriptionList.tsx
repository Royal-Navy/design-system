import React from 'react'
import { IconKeyboardArrowDown } from '@royalnavy/icon-library'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { DescriptionListItem, DescriptionListItemProps } from '.'
import { warnIfOverwriting } from '../../helpers'
import { useOpenClose } from '../../hooks'
import { StyledAction } from './partials/StyledAction'
import { StyledBadge } from './partials/StyledBadge'
import { StyledDescriptionList } from './partials/StyledDescriptionList'
import { StyledHeader } from './partials/StyledHeader'
import { StyledSheet } from './partials/StyledSheet'
import { StyledDescription } from './partials/StyledDescription'
import { useExternalId } from '../../hooks/useExternalId'

export interface DescriptionListProps extends ComponentWithClass {
  /**
   * Collection of `DescriptionListItem` components to display in the list.
   */
  children:
    | React.ReactElement<DescriptionListItemProps>
    | React.ReactElement<DescriptionListItemProps>[]
  /**
   * Toggles whether the list is collapsable via user input.
   */
  isCollapsible?: boolean
  /**
   * Denotes whether the collapsible variant is open.
   */
  isOpen?: boolean
  /**
   * Text description to display at the top of the component.
   */
  description: string
}

function useAriaAttributes(isCollapsible: boolean, expanded: boolean) {
  const sheetId = useExternalId('sheet')

  if (isCollapsible) {
    return {
      'aria-expanded': expanded,
      'aria-label': expanded ? 'Hide data' : 'Show data',
      'aria-owns': sheetId,
    }
  }

  return null
}

export const DescriptionList: React.FC<DescriptionListProps> = ({
  isCollapsible = false,
  isOpen = false,
  description,
  children,
  ...rest
}) => {
  const { open, toggle } = useOpenClose(isOpen)
  const ariaAttributes = useAriaAttributes(isCollapsible, open)
  const sheetId = ariaAttributes ? ariaAttributes['aria-owns'] : undefined

  return (
    <StyledDescriptionList
      $isCollapsible={isCollapsible}
      $isOpen={open}
      data-testid="description-list"
      {...rest}
    >
      <StyledHeader
        $isCollapsible={isCollapsible}
        onClick={toggle}
        data-testid="description-list-header"
        {...ariaAttributes}
      >
        <StyledDescription>
          {description}
          {isCollapsible && (
            <StyledBadge $isCollapsible={isCollapsible} size="small">
              {
                (children as React.ReactElement<DescriptionListItemProps>[])
                  .length
              }
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
        data-testid="description-list-sheet"
        id={sheetId}
      >
        {React.Children.map(
          children,
          (child: React.ReactElement<DescriptionListItemProps>) => {
            warnIfOverwriting(
              child.props,
              'isCollapsible',
              DescriptionListItem.name
            )

            return React.cloneElement(child, {
              ...child.props,
              isCollapsible,
            })
          }
        )}
      </StyledSheet>
    </StyledDescriptionList>
  )
}

DescriptionList.displayName = 'DescriptionList'
