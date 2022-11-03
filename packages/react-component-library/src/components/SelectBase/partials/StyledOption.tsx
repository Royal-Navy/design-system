import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { COMPONENT_SIZE } from '../../Forms'
import { TEXT_INPUT_INPUT_HEIGHT } from '../../TextInput/partials/StyledInput'

const { color, fontSize, spacing } = selectors

export interface StyledOptionsProps {
  $isHighlighted?: boolean
}

export const StyledOption = styled.li<StyledOptionsProps>`
  height: ${TEXT_INPUT_INPUT_HEIGHT[COMPONENT_SIZE.FORMS]};
  padding: 0 11px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${color('neutral', '900')};
  font-size: ${fontSize('m')};

  &:hover:not([disabled]) {
    background-color: ${color('neutral', '100')};
  }

  &[disabled] {
    color: ${color('neutral', '400')};
    cursor: not-allowed;
  }

  ${({ $isHighlighted }) =>
    $isHighlighted &&
    css`
      background-color: ${color('neutral', '100')};
    `}

  & > svg {
    height: 16px;
    width: 16px;
    transform: translateY(1px);
    margin-right: ${spacing('4')};
  }
`
