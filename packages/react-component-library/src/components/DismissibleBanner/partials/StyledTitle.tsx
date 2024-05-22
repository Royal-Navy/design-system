import { color, fontSize, spacing } from '@royalnavy/design-tokens'
import styled from 'styled-components'

export const StyledTitle = styled.h2`
  color: ${color('neutral', '600')};
  font-size: ${fontSize('l')};
  font-weight: bold;
  margin-bottom: ${spacing('2')};
`
