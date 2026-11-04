import { styled } from 'styled-components'

import { CheckmarkWrapperProps } from '../../CheckboxRadioBase/CheckboxRadioBaseProps'
import { CHECKMARK_LEFT_IN_CONTAINER } from '../../CheckboxRadioBase/constants'

const CHECKMARK_HEIGHT = '18px'

export const StyledCheckmarkWrapper = styled.span<CheckmarkWrapperProps>`
  display: block;
  height: ${CHECKMARK_HEIGHT};
  width: 18px;
  position: absolute;
  top: calc((100% - ${CHECKMARK_HEIGHT}) / 2);
  left: ${({ $hasContainer, $hasLabel, $size }) => {
    if ($hasContainer) {
      return CHECKMARK_LEFT_IN_CONTAINER[$size]
    }

    if ($hasLabel) {
      return '4px'
    }

    return '0px'
  }};
`
