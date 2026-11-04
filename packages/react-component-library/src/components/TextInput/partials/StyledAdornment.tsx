import { styled, css } from 'styled-components'
import { color, spacing } from '@royalnavy/design-tokens'

import { COMPONENT_SIZE, ComponentSizeType } from '../../Forms'

export type AdornmentPositionType = 'start' | 'end'

interface StyledAdornmentProps {
  $position: AdornmentPositionType
  $size: ComponentSizeType
}

const ADORNMENT_PADDING = {
  [COMPONENT_SIZE.FORMS]: spacing('6'),
  [COMPONENT_SIZE.SMALL]: `0 ${spacing('4')}`,
}

const positionStyles = {
  start: css`
    order: 1;
    padding-right: 0;
  `,
  end: css`
    order: 3;
    padding-left: 0;
  `,
}

export const StyledAdornment = styled.div<StyledAdornmentProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: ${({ $size }) => ADORNMENT_PADDING[$size]};
  color: ${color('neutral', '400')};

  ${({ $position }) => positionStyles[$position]}
`
