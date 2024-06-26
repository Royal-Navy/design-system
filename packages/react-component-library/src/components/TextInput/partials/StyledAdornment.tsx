import styled, { css } from 'styled-components'
import { color, spacing } from '@royalnavy/design-tokens'

export type AdornmentPositionType = 'start' | 'end'

interface StyledAdornmentProps {
  $position: AdornmentPositionType
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
  padding: ${spacing('6')};
  color: ${color('neutral', '400')};

  ${({ $position }) => positionStyles[$position]}
`
