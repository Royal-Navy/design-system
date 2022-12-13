import styled from 'styled-components'

import { CheckmarkWrapperProps } from '../../CheckboxRadioBase/CheckboxRadioBaseProps'

const CHECKMARK_HEIGHT = '18px'

export const StyledCheckmarkWrapper = styled.span<CheckmarkWrapperProps>`
  display: block;
  position: absolute;
  top: calc((100% - ${CHECKMARK_HEIGHT}) / 2);
  left: ${({ $hasContainer }) => ($hasContainer ? '12px' : '4px')};
  height: ${CHECKMARK_HEIGHT};
  width: 18px;
`
