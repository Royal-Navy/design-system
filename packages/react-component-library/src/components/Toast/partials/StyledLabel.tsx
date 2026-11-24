import { styled } from 'styled-components'
import { themeColor, fontSize, spacing } from '@royalnavy/design-tokens'

export const StyledLabel = styled.span`
  display: block;
  color: ${themeColor('neutral', '500')};
  font-size: ${fontSize('m')};
  font-weight: 600;
  padding: 0;

  > svg {
    margin-right: ${spacing('2')};
    transform: translateY(2px);
  }
`
