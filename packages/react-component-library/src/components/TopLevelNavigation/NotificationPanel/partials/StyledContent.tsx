import styled from 'styled-components'
import { color, fontSize, spacing } from '@royalnavy/design-tokens'

export const StyledContent = styled.span`
  display: block;
  margin-left: ${spacing('6')};
  font-size: ${fontSize('s')};
  line-height: 1.3;

  strong {
    color: ${color('neutral', '000')};
  }
`
