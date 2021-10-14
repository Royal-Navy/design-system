import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

export type AdornmentPositionType = 'start' | 'end'

interface StyledAdornmentProps {
  $position: AdornmentPositionType
}

const { spacing } = selectors

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

  ${({ $position }) => positionStyles[$position]}
`
