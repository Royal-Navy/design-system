import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledIconLeft = styled.div`
  svg {
    color: ${color('neutral', '400')};
    overflow: visible;
    margin-right: ${spacing('2')};
  }
`
