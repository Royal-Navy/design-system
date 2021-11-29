import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { COMPONENT_SIZE } from '../../Forms'
import { TEXT_INPUT_INPUT_HEIGHT } from '../../TextInputE/partials/StyledInput'

const { color } = selectors

interface StyledOptionsProps {
  $isHighlighted: boolean
}

export const StyledOption = styled.li<StyledOptionsProps>`
  height: ${TEXT_INPUT_INPUT_HEIGHT[COMPONENT_SIZE.FORMS]};
  padding-left: 11px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${color('neutral', '400')};

  &:hover {
    background-color: ${color('neutral', '100')};
  }

  ${({ $isHighlighted }) =>
    $isHighlighted &&
    css`
      background-color: ${color('neutral', '100')};
    `}
`
