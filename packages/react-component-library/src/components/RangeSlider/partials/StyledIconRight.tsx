import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, spacing } = selectors

export const StyledIconRight = styled.div`
  svg {
    color: ${color('neutral', '400')};
    overflow: visible;
    margin-left: ${spacing('2')};
  }
`
