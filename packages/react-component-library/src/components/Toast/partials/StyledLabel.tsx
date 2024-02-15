import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize, spacing } = selectors

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
