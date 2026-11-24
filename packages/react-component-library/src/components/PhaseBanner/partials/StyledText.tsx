import { styled } from 'styled-components'
import {
  animation,
  themeColor,
  fontSize,
  spacing,
} from '@royalnavy/design-tokens'

export const StyledText = styled.span`
  font-size: ${fontSize('base')};
  font-weight: 500;
  margin-left: ${spacing('4')};
  color: ${themeColor('neutral', '400')};

  a {
    color: ${themeColor('neutral', '700')};
    text-decoration: underline;
    transition: color ${animation('default')};

    &:hover {
      color: ${themeColor('action', '600')};
    }
  }
`
