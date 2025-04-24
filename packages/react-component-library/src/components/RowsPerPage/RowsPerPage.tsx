import React from 'react'

import { Select, SelectOption } from '../Select'

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
}

export const ROWS_PER_PAGE_OPTIONS = ['10', '25', '50', '100']

export const RowsPerPage = (props: RowsPerPageProps) => (
  <Select
    hideClearButton
    initialValue={ROWS_PER_PAGE_OPTIONS[0]}
    label="Rows per page"
    {...props}
  >
    {ROWS_PER_PAGE_OPTIONS.map((option) => (
      <SelectOption key={option} value={option}>
        {option}
      </SelectOption>
    ))}
  </Select>
)

RowsPerPage.displayName = 'RowsPerPage'
