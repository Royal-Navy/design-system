import styled from 'styled-components'
import { color, fontSize, spacing } from '@royalnavy/design-tokens'

export const StyledLabel = styled.span`
  display: block;
  color: ${color('neutral', '500')};
  font-size: ${fontSize('m')};
  font-weight: 600;
  padding: 0;

  > svg {
    margin-right: ${spacing('2')};
    transform: translateY(2px);
  }
`
