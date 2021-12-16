import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { COMPONENT_SIZE, ComponentSizeType } from '../../Forms'
import { StyledInlineButton } from '../../InlineButtons/partials/StyledInlineButton'

const { color } = selectors

interface StyledDividerProps {
  $size: ComponentSizeType
}

export const StyledDivider = styled.div<StyledDividerProps>`
  position: relative;
  border-left: 1px solid ${color('neutral', '200')};
  height: 24px;
  top: 10px;

  ${({ $size }) =>
    $size === COMPONENT_SIZE.SMALL &&
    css`
      height: 21px;
      top: 5px;
    `}

  ${StyledInlineButton} + & {
    top: 0;
  }
`
