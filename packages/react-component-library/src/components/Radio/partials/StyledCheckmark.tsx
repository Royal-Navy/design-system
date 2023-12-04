import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { CheckmarkProps } from '../../CheckboxRadioBase/CheckboxRadioBaseProps'

const { color } = selectors

export const StyledCheckmark = styled.span<CheckmarkProps>`
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
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
