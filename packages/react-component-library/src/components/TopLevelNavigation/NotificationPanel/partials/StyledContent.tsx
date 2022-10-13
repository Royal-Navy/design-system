import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { spacing, fontSize, color } = selectors

export const StyledContent = styled.span`
  display: block;
  margin-left: ${spacing('6')};
  font-size: ${fontSize('s')};
  line-height: 1.3;

  strong {
    color: ${color('neutral', '000')};
  }
`
