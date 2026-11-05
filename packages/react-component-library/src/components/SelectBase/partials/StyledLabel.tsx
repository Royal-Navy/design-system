import { styled, css } from 'styled-components'

import { COMPONENT_SIZE } from '../../Forms'
import { StyledLabel as StyledTextInputLabel } from '../../TextInput/partials/StyledLabel'
import { TEXT_INPUT_INPUT_HEIGHT } from '../../TextInput/partials/StyledInput'

export const StyledLabel = styled(StyledTextInputLabel)`
  ${({ $hasContent, $hasFocus, $size = COMPONENT_SIZE.FORMS }) => {
    const isRaised = $hasContent || $hasFocus

    if ($size === COMPONENT_SIZE.SMALL && isRaised) {
      return null
    }

    return css`
      display: block;
      line-height: ${isRaised ? '18px' : TEXT_INPUT_INPUT_HEIGHT[$size]};
    `
  }}
`
