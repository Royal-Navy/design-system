import { fontSize } from '@royalnavy/design-tokens'
import { styled, css } from 'styled-components'

import { COMPONENT_SIZE, ComponentSizeType } from '../../Forms'
import {
  StyledLabel as StyledLabelBase,
  StyledLabelProps,
} from '../../../styled-components/partials/StyledLabel'

function floatedLabel($size: ComponentSizeType) {
  if ($size === COMPONENT_SIZE.SMALL) {
    return css`
      display: none;
    `
  }

  return css`
    height: 18px;
    margin-top: 2px;
    font-size: ${fontSize('s')};
  `
}

export const StyledLabel = styled(StyledLabelBase)<StyledLabelProps>`
  display: inline-flex;
  height: 100%;
  align-items: center;
  padding-left: 11px;
  padding-right: 7px;

  ${({ $hasFocus, $hasContent, $size = COMPONENT_SIZE.FORMS }) => css`
    ${($hasContent || $hasFocus) && floatedLabel($size)}

    // Browser autofill sets the value without firing a change event until the user interacts
    &:has(+ input:-webkit-autofill) {
      ${floatedLabel($size)}
    }
  `}
`
