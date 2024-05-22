import styled from 'styled-components'
import { color, fontSize } from '@royalnavy/design-tokens'

export const StyledTitle = styled.span`
  display: block;
  padding-bottom: 8px;
  color: ${color('neutral', '600')};
  font-size: ${fontSize('l')};
  font-weight: 700;

  &:only-child {
    padding-bottom: 0;
  }
`
