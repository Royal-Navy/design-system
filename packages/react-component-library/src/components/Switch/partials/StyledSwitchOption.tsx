import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

interface StyledSwitchOptionProps {
  $isActive?: boolean
  $isDisabled?: boolean
}

const { spacing, color } = selectors

export const StyledSwitchOption = styled.label<StyledSwitchOptionProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${spacing('6')};
  border: 1px solid ${color('neutral', '200')};
  color: ${color('neutral', '400')};
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

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${color('action', '600')};
      color: ${color('neutral', 'white')};
      border-color: ${color('action', '600')};
      cursor: default;
      outline: none;

      &:focus-within,
      &:active {
        z-index: 1;
        outline: none;
        border-color: ${color('action', '500')};
        box-shadow: 0 0 0 2px ${color('action', '500')},
          0 0 0 5px ${color('action', '100')};
      }
    `}

  ${({ $isDisabled, $isActive }) =>
    !$isDisabled &&
    !$isActive &&
    css`
      &:hover {
        background-color: ${color('neutral', '100')};
        color: ${color('neutral', '400')};
        border-color: ${color('neutral', '200')};
      }

      &:focus-within,
      &:active {
        z-index: 1;
        outline: none;
        border-color: ${color('action', '500')};
        box-shadow: 0 0 0 2px ${color('action', '500')},
          0 0 0 5px ${color('action', '100')};
      }
    `}

  ${({ $isDisabled, $isActive }) =>
    $isDisabled &&
    $isActive &&
    css`
      background-color: ${color('neutral', '100')};
      border-color: ${color('neutral', '100')};
      color: ${color('neutral', '400')};
      cursor: not-allowed;

      &&& {
        &:hover,
        &:focus-within,
        &:active {
          background-color: ${color('neutral', '100')};
          border-color: transparent;
          box-shadow: none;
        }
      }
    `}
`
