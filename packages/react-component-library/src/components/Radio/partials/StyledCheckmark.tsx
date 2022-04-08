import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { CheckmarkProps } from '../../CheckboxRadioBase'

const { color } = selectors

export const StyledCheckmark = styled.div<CheckmarkProps>`
  position: absolute;
  top: ${({ $hasContainer }) => ($hasContainer ? '13px' : '4px')};
  left: ${({ $hasContainer }) => ($hasContainer ? '12px' : '4px')};
  height: 16px;
  width: 16px;
  border-radius: 999px;
  border: 1px solid
    ${({ $hasContainer, $isDisabled }) =>
      color('neutral', $hasContainer || !$isDisabled ? '200' : '100')};
  outline: none;

  &::after,
  &::before {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 999px;
    position: absolute;
    display: none;
  }
`
