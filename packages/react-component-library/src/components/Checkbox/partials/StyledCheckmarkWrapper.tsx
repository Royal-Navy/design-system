import styled from 'styled-components'

import { CheckmarkWrapperProps } from '../../CheckboxRadioBase'

export const StyledCheckmarkWrapper = styled.span<CheckmarkWrapperProps>`
  display: block;
  position: absolute;
  top: ${({ $hasContainer }) => ($hasContainer ? '12px' : '4px')};
  left: ${({ $hasContainer }) => ($hasContainer ? '12px' : '4px')};
  height: 18px;
  width: 18px;
`
