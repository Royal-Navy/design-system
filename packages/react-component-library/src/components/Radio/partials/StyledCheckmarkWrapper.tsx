import styled from 'styled-components'

import { CheckmarkWrapperProps } from '../../CheckboxRadioBase'

export const StyledCheckmarkWrapper = styled.span<CheckmarkWrapperProps>`
  display: block;
  position: absolute;
  top: ${({ $hasContainer }) => ($hasContainer ? '13px' : '4px')};
  left: ${({ $hasContainer }) => ($hasContainer ? '12px' : '4px')};
  height: 16px;
  width: 16px;
`
