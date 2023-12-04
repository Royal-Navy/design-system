import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing, animation } = selectors

export const StyledBreadcrumbsItem = styled.li`
  display: inline-flex;
  transition: all ${animation('default')};
  align-items: center;

  > a {
    color: ${color('neutral', '400')};
    font-weight: 400;
    text-decoration: none;

    &:hover {
      color: ${color('action', '500')};
    }
  }

  svg {
    margin: 0 ${spacing('2')};
  }

  span,
  a {
    vertical-align: top;
  }
`
