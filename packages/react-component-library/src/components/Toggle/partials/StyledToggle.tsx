import styled from 'styled-components'
import { color } from '@royalnavy/design-tokens'

interface StyledToggleProps {
  $isChecked: boolean
  $isDisabled: boolean
}

export const StyledToggle = styled.div<StyledToggleProps>`
  width: 72px;
  height: 33px;
  background-color: ${({ $isChecked }) =>
    $isChecked ? color('action', '500') : '#fff'};
  border-radius: 16px;
  position: relative;

  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};
  z-index: 1;
  border: 1px solid
    ${({ $isChecked }) =>
      $isChecked ? color('action', '500') : color('neutral', '200')};

  ${({ $isDisabled }) =>
    $isDisabled &&
    ` 
      opacity: 0.5;
    `}

  &:hover {
    background-color: ${({ $isChecked }) =>
      $isChecked ? color('action', '700') : '#fff'};
    border-color: ${({ $isChecked }) =>
      $isChecked ? color('action', '700') : color('neutral', '200')};
  }
`
