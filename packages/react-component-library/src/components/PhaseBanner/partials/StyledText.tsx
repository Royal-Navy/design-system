import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { fontSize, spacing, color, animation } = selectors

export const StyledText = styled.span`
  display: inline-block;
  font-size: ${fontSize('base')};
  vertical-align: middle;
  font-weight: 500;
  margin-left: ${spacing('4')};
  color: ${color('neutral', '400')};
  margin-top: ${spacing('1')};

  a {
    color: ${color('neutral', '700')};
    text-decoration: underline;
    transition: color ${animation('default')};

    &:hover {
      color: ${color('action', '600')};
    }
  }
`
