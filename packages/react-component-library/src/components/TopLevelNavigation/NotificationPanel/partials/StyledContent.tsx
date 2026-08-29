import styled from 'styled-components'
import { colorValue, fontSize, spacing } from '@royalnavy/design-tokens'

export const StyledContent = styled.span`
  display: block;
  margin-left: ${spacing('6')};
  font-size: ${fontSize('s')};
  line-height: 1.3;

  // The notification panel is an always-dark surface, so emphasised text
  // stays a fixed light value rather than flipping with the theme.
  strong {
    color: ${colorValue('neutral', '000')};
  }
`
