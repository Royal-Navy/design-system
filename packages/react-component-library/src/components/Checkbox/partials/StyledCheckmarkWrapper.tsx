import styled from 'styled-components'

import { CheckmarkWrapperProps } from '../../CheckboxRadioBase/CheckboxRadioBaseProps'

const CHECKMARK_HEIGHT = '18px'

export const StyledCheckmarkWrapper = styled.span<CheckmarkWrapperProps>`
  display: block;
  height: ${CHECKMARK_HEIGHT};
  width: 18px;
  position: absolute;
  top: calc((100% - ${CHECKMARK_HEIGHT}) / 2);
  left: ${({ $hasContainer, $hasLabel }) => {
    if ($hasContainer) {
      return '12px'
    }

    if ($hasLabel) {
      return '4px'
    }

    return '0px'
  }};
`
