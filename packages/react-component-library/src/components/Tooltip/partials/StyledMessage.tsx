import { styled } from 'styled-components'
import { color, fontSize } from '@royalnavy/design-tokens'

export const StyledMessage = styled.div`
  font-size: ${fontSize('base')};
  // The tooltip bubble is always dark in both themes, so its message text
  // stays a fixed light value rather than flipping with the theme.
  color: ${color('neutral', '100')};
`
