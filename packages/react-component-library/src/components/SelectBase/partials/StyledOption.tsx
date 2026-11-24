import { styled, css } from 'styled-components'
import { themeColor, fontSize, spacing } from '@royalnavy/design-tokens'

import { COMPONENT_SIZE } from '../../Forms'
import { TEXT_INPUT_INPUT_HEIGHT } from '../../TextInput/partials/StyledInput'

export interface StyledOptionsProps {
  $isHighlighted?: boolean
  disabled?: boolean
}

export const StyledOption = styled.li<StyledOptionsProps>`
  height: ${TEXT_INPUT_INPUT_HEIGHT[COMPONENT_SIZE.FORMS]};
  padding: 0 11px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${themeColor('neutral', '900')};
  font-size: ${fontSize('m')};

  &:hover:not([disabled]) {
    background-color: ${themeColor('neutral', '100')};
  }

  &[disabled] {
    color: ${themeColor('neutral', '400')};
    cursor: not-allowed;
  }

  ${({ $isHighlighted }) =>
    $isHighlighted &&
    css`
      background-color: ${themeColor('neutral', '100')};
    `}

  & > svg {
    height: 16px;
    width: 16px;
    transform: translateY(1px);
    margin-right: ${spacing('4')};
  }
`
