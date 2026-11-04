import { styled } from 'styled-components'

import { CheckmarkWrapperProps } from '../../CheckboxRadioBase/CheckboxRadioBaseProps'
import { CHECKMARK_LEFT_IN_CONTAINER } from '../../CheckboxRadioBase/constants'

const CHECKMARK_HEIGHT = '16px'

export const StyledCheckmarkWrapper = styled.span<CheckmarkWrapperProps>`
  display: block;
  position: absolute;
  top: calc((100% - ${CHECKMARK_HEIGHT}) / 2);
  left: ${({ $hasContainer, $size }) =>
    $hasContainer ? CHECKMARK_LEFT_IN_CONTAINER[$size] : '4px'};
  height: ${CHECKMARK_HEIGHT};
  width: 16px;
`
