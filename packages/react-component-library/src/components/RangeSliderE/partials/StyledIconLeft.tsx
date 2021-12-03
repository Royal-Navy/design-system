import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, spacing } = selectors

export const StyledIconLeft = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${color('neutral', '400')};
    overflow: visible;
    margin-right: ${spacing('6')};
  }
`
