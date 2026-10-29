import { css, styled } from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'

interface StyledFieldProps {
  $hasReservedErrorSpace?: boolean
}

export const StyledField = styled.div<StyledFieldProps>`
  margin: ${spacing('10')} 0;

  ${({ $hasReservedErrorSpace }) =>
    $hasReservedErrorSpace &&
    css`
      margin: ${spacing('2')} 0 0;
    `}
`
