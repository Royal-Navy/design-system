import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { spacing } = selectors

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
