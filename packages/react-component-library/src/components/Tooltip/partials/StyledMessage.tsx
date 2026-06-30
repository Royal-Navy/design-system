import styled from 'styled-components'
import { colorValue, fontSize } from '@royalnavy/design-tokens'

export const StyledMessage = styled.div`
  font-size: ${fontSize('base')};
  // The tooltip bubble is always dark in both themes, so its message text
  // stays a fixed light value rather than flipping with the theme.
  color: ${colorValue('neutral', '100')};
`
