import { spacing } from '@royalnavy/design-tokens'
import styled from 'styled-components'

type SwatchProps = {
  $backgroundColor?: string
  $boxShadow?: string
}

export const StyledSwatch = styled.div<SwatchProps>`
  min-width: ${spacing('15')};
  height: 100%;
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? 'none'};

  box-shadow: ${({ $boxShadow }) => $boxShadow ?? 'none'};
`
