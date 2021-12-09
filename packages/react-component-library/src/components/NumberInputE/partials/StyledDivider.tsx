import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { COMPONENT_SIZE, ComponentSizeType } from '../../Forms'

const { color } = selectors

interface StyledDividerProps {
  $size: ComponentSizeType
}

export const StyledDivider = styled.div<StyledDividerProps>`
  position: relative;
  border-left: 1px solid ${color('neutral', '200')};
  height: 24px;

  ${({ $size }) =>
    $size === COMPONENT_SIZE.SMALL &&
    css`
      top: 5px;
      height: 21px;
    `}
`
