import React from 'react'
import styled from 'styled-components'
import { color, fontSize, spacing } from '@royalnavy/design-tokens'

import { Select, SelectOption } from '../Select'

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing('6')};
`

const StyledShowingText = styled.span`
  color: ${color('neutral', '400')};
  font-size: ${fontSize('base')};
  white-space: nowrap;
`

interface RowsPerPageProps {
  /**
   * Optional HTML `id` attribute to apply to the component.
   */
  id?: string
  /**
   * Toggles whether the list is open on first render.
   */
  initialIsOpen?: boolean
  /**
   * The initially selected item when the component is uncontrolled.
   */
  initialValue?: string | null
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Toggles whether the component is invalid or not.
   */
  isInvalid?: boolean
  /**
   * Optional handler invoked when the selected value changes.
   */
  onChange?: (value: string | null) => void
  /**
   * The selected value when the component is controlled.
   */
  value?: string | null
  /**
   * Toggles whether to show the "Showing X to Y of Z" text.
   */
  showItemRange?: boolean
  /**
   * The current page number (1-indexed).
   */
  currentPage?: number
  /**
   * The total number of items.
   */
  totalItems?: number
}

export const ROWS_PER_PAGE_OPTIONS = ['10', '25', '50', '100']

export const DEFAULT_ROWS_PER_PAGE = Number(ROWS_PER_PAGE_OPTIONS[0])

export const RowsPerPage = ({
  showItemRange = false,
  currentPage = 1,
  totalItems = 0,
  value,
  initialValue = DEFAULT_ROWS_PER_PAGE.toString(),
  ...props
}: RowsPerPageProps) => {
  const rowsPerPage = Number(value || initialValue)
  const startItem = totalItems > 0 ? (currentPage - 1) * rowsPerPage + 1 : 0
  const endItem = Math.min(currentPage * rowsPerPage, totalItems)

  const selectComponent = (
    <Select
      hideClearButton
      initialValue={initialValue}
      label="Rows per page"
      value={value}
      {...props}
    >
      {ROWS_PER_PAGE_OPTIONS.map((option) => (
        <SelectOption key={option} value={option}>
          {option}
        </SelectOption>
      ))}
    </Select>
  )

  if (!showItemRange) {
    return selectComponent
  }

  return (
    <StyledWrapper>
      <StyledShowingText>
        Showing <strong>{startItem}</strong> to <strong>{endItem}</strong> of{' '}
        <strong>{totalItems}</strong>
      </StyledShowingText>
      {selectComponent}
    </StyledWrapper>
  )
}

RowsPerPage.displayName = 'RowsPerPage'
