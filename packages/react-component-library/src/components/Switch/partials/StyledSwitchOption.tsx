import { styled, css } from 'styled-components'
import { themeColor, color, spacing } from '@royalnavy/design-tokens'

import { SWITCH_OPTION_VARIANT } from '../constants'
import { SwitchOptionVariantType } from '../SwitchOption'

interface StyledSwitchOptionProps {
  $isActive?: boolean
  $isDisabled?: boolean
  $variant?: SwitchOptionVariantType
}

type VariantActiveStyle = {
  backgroundColor: string
  color: string
  borderColor: string
  focusBorderColor: string
  focusBoxShadow: string
}

const VARIANT_ACTIVE_STYLES: Record<string, VariantActiveStyle> = {
  [SWITCH_OPTION_VARIANT.PRIMARY]: {
    backgroundColor: themeColor('action', '600'),
    color: color('neutral', 'white'),
    borderColor: themeColor('action', '600'),
    focusBorderColor: themeColor('action', '500'),
    focusBoxShadow: `0 0 0 2px ${themeColor(
      'action',
      '500'
    )}, 0 0 0 5px ${themeColor('action', '100')}`,
  },
  [SWITCH_OPTION_VARIANT.SECONDARY]: {
    backgroundColor: themeColor('action', '100'),
    color: themeColor('action', '800'),
    borderColor: themeColor('action', '600'),
    focusBorderColor: themeColor('action', '500'),
    focusBoxShadow: `0 0 0 2px ${themeColor(
      'action',
      '500'
    )}, 0 0 0 5px ${themeColor('action', '100')}`,
  },
  [SWITCH_OPTION_VARIANT.TERTIARY]: {
    backgroundColor: themeColor('neutral', 'white'),
    color: themeColor('action', '600'),
    borderColor: themeColor('action', '600'),
    focusBorderColor: themeColor('action', '500'),
    focusBoxShadow: `0 0 0 2px ${themeColor(
      'action',
      '500'
    )}, 0 0 0 5px ${themeColor('action', '100')}`,
  },
  [SWITCH_OPTION_VARIANT.DANGER]: {
    backgroundColor: themeColor('danger', '700'),
    color: color('neutral', 'white'),
    borderColor: themeColor('danger', '700'),
    focusBorderColor: themeColor('danger', '700'),
    focusBoxShadow: `0 0 0 2px ${themeColor(
      'danger',
      '700'
    )}, 0 0 0 5px ${themeColor('danger', '100')}`,
  },
}

function getVariantActiveStyles(
  $variant: SwitchOptionVariantType = SWITCH_OPTION_VARIANT.PRIMARY
) {
  const styles = VARIANT_ACTIVE_STYLES[$variant]
  return css`
    background-color: ${styles.backgroundColor};
    color: ${styles.color};
    border-color: ${styles.borderColor};
    cursor: default;
    outline: none;
    z-index: 1;

    &:focus-within,
    &:active {
      outline: none;
      border-color: ${styles.focusBorderColor};
      box-shadow: ${styles.focusBoxShadow};
    }
  `
}

export const StyledSwitchOption = styled.label<StyledSwitchOptionProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${spacing('6')};
  border: 1px solid ${themeColor('neutral', '200')};
  color: ${themeColor('neutral', '400')};
  font-size: inherit;
  font-weight: 600;
  user-select: none;
  cursor: pointer;
  z-index: 0;

  &:nth-child(n + 2) {
    margin-left: -1px;
  }

  &:first-of-type {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  &:last-of-type {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      border-color: transparent;
      cursor: not-allowed;

      &:hover {
        background-color: initial;
      }
    `}

  ${({ $isActive, $variant }) => $isActive && getVariantActiveStyles($variant)}

  ${({ $isDisabled, $isActive }) =>
    !$isDisabled &&
    !$isActive &&
    css`
      &:hover {
        background-color: ${themeColor('neutral', '100')};
        color: ${themeColor('neutral', '400')};
        border-color: ${themeColor('neutral', '200')};
      }

      &:focus-within,
      &:active {
        z-index: 1;
        outline: none;
        border-color: ${themeColor('action', '500')};
        box-shadow: 0 0 0 2px ${themeColor('action', '500')},
          0 0 0 5px ${themeColor('action', '100')};
      }
    `}

  ${({ $isDisabled, $isActive }) =>
    $isDisabled &&
    $isActive &&
    css`
      background-color: ${themeColor('neutral', '100')};
      border-color: ${themeColor('neutral', '100')};
      color: ${themeColor('neutral', '400')};
      cursor: not-allowed;

      &&& {
        &:hover,
        &:focus-within,
        &:active {
          background-color: ${themeColor('neutral', '100')};
          border-color: transparent;
          box-shadow: none;
        }
      }
    `}
`
