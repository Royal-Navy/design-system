import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { fontSize, spacing, color } = selectors

export const StyledViewAll = styled.span`
  font-size: ${fontSize('s')};
  display: block;
  text-align: right;
  margin-right: ${spacing('6')};
  margin-bottom: ${spacing('6')};
  color: ${color('action', '300')};

  svg {
    position: relative;
    top: 4px;
  }

  a {
    text-decoration: none;
  }

  &:hover {
    svg {
      transform: translate3d(4px, 0, 0);
      transition: 0.2s;
    }
  }
`
