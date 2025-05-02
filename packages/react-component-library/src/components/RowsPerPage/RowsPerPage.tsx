import { color, fontSize, spacing } from '@royalnavy/design-tokens'
import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'

import { useExternalId } from '../../hooks/useExternalId'
import { useFocus } from '../../hooks/useFocus'
import { StyledOuterWrapper } from '../../styled-components'
import { Group } from '../Group'

const StyledLabel = styled.label<{ $isDisabled: boolean }>`
  color: ${color('neutral', '400')};
  font-size: ${fontSize('base')};
  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      opacity: 0.5;
    `}
`
const StyledSelect = styled.select<{ $isDisabled: boolean }>`
  margin-left: ${spacing('4')};
  color: ${color('neutral', '600')};
  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
  outline: 0;
  border: 0;
  height: 31px;
  border-radius: 12px;
`

interface RowsPerPageProps {
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Optional handler invoked when the selected value changes.
   */
  onChange?: (value: string | null) => void
  /**
   * The selected value when the component is controlled.
   */
  value?: number | null
}

export const ROWS_PER_PAGE_OPTIONS = [10, 25, 50, 100]

export const DEFAULT_ROWS_PER_PAGE = Number(ROWS_PER_PAGE_OPTIONS[0])

export const RowsPerPage = ({
  isDisabled,
  onChange,
  value,
}: RowsPerPageProps) => {
  const id = useExternalId('rows-per-page')

  const options = useMemo(() => {
    if (!value) {
      return ROWS_PER_PAGE_OPTIONS
    }

    const defaults = new Set([...ROWS_PER_PAGE_OPTIONS, value])
    return Array.from(defaults).sort((a, b) => a - b)
  }, [value])

  const { hasFocus, onLocalBlur, onLocalFocus } = useFocus()

  return (
    <Group gap="4">
      <StyledLabel htmlFor={id} $isDisabled={!!isDisabled}>
        Rows per page
      </StyledLabel>
      <StyledOuterWrapper $hasFocus={hasFocus}>
        <StyledSelect
          $isDisabled={!!isDisabled}
          id={id}
          onBlur={onLocalBlur}
          onFocus={onLocalFocus}
          onChange={(e) => onChange?.(e.target.value)}
          value={value?.toString()}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </StyledSelect>
      </StyledOuterWrapper>
    </Group>
  )
}

RowsPerPage.displayName = 'RowsPerPage'
